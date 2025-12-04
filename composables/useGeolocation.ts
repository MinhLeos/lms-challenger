import type { Location } from '~/types/Weather'

export function useGeolocation() {
  const isSupported = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const position = ref<{ latitude: number; longitude: number } | null>(null)

  // Check if geolocation is supported
  onMounted(() => {
    isSupported.value = 'geolocation' in navigator
  })

  // Get current position
  async function getCurrentPosition(): Promise<{ latitude: number; longitude: number } | null> {
    if (!isSupported.value) {
      error.value = 'Geolocation is not supported by your browser'
      return null
    }

    isLoading.value = true
    error.value = null

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          position.value = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
          isLoading.value = false
          resolve(position.value)
        },
        (err) => {
          switch (err.code) {
            case err.PERMISSION_DENIED:
              error.value = 'Location permission denied'
              break
            case err.POSITION_UNAVAILABLE:
              error.value = 'Location information unavailable'
              break
            case err.TIMEOUT:
              error.value = 'Location request timed out'
              break
            default:
              error.value = 'An unknown error occurred'
          }
          isLoading.value = false
          resolve(null)
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000 // Cache for 5 minutes
        }
      )
    })
  }

  // Reverse geocoding - get location name from coordinates
  async function getLocationFromCoords(latitude: number, longitude: number): Promise<Location | null> {
    try {
      // Use Open-Meteo Geocoding API for reverse geocoding
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=&latitude=${latitude}&longitude=${longitude}&count=1`
      
      // Open-Meteo doesn't have reverse geocoding, so we'll use a simple approach
      // by searching for the nearest city using coordinates
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
      
      if (!response.ok) {
        throw new Error('Reverse geocoding failed')
      }

      const data = await response.json()
      
      return {
        id: Date.now(),
        name: data.city || data.locality || data.principalSubdivision || 'Unknown',
        latitude,
        longitude,
        country: data.countryName || data.countryCode || 'Unknown'
      }
    } catch (err) {
      console.error('Reverse geocoding error:', err)
      // Return a generic location if reverse geocoding fails
      return {
        id: Date.now(),
        name: 'Current Location',
        latitude,
        longitude,
        country: ''
      }
    }
  }

  // Get current location with name
  async function getCurrentLocation(): Promise<Location | null> {
    const coords = await getCurrentPosition()
    if (!coords) return null

    return await getLocationFromCoords(coords.latitude, coords.longitude)
  }

  return {
    isSupported,
    isLoading,
    error,
    position,
    getCurrentPosition,
    getCurrentLocation,
    getLocationFromCoords
  }
}
