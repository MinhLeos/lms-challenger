import type { Location, GeocodingResponse } from '~/types/Weather'
import { GEOCODING_API_URL } from '~/utils/weather-constants'

export function useGeocoding() {
  // State
  const locations = ref<Location[]>([])
  const isSearching = ref(false)
  const searchError = ref<string | null>(null)
  const searchQuery = ref('')

  // Debounce timer
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  // Search locations by name
  async function searchLocations(query: string): Promise<Location[]> {
    if (!query || query.trim().length < 2) {
      locations.value = []
      return []
    }

    searchQuery.value = query
    isSearching.value = true
    searchError.value = null

    try {
      const url = new URL(`${GEOCODING_API_URL}/search`)
      url.searchParams.set('name', query.trim())
      url.searchParams.set('count', '5')
      url.searchParams.set('language', 'en')
      url.searchParams.set('format', 'json')

      const response = await fetch(url.toString())
      
      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`)
      }

      const data: GeocodingResponse = await response.json()
      
      locations.value = data.results || []
      return locations.value
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to search locations'
      searchError.value = message
      locations.value = []
      return []
    } finally {
      isSearching.value = false
    }
  }

  // Debounced search (300ms delay)
  function debouncedSearch(query: string, delay: number = 300): void {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    if (!query || query.trim().length < 2) {
      locations.value = []
      return
    }

    debounceTimer = setTimeout(() => {
      searchLocations(query)
    }, delay)
  }

  // Clear search results
  function clearSearch(): void {
    locations.value = []
    searchQuery.value = ''
    searchError.value = null
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
  }

  // Format location display name
  function formatLocationName(location: Location): string {
    const parts = [location.name]
    if (location.admin1) {
      parts.push(location.admin1)
    }
    parts.push(location.country)
    return parts.join(', ')
  }

  // Check if there are no results after search
  const hasNoResults = computed(() => {
    return !isSearching.value && 
           searchQuery.value.length >= 2 && 
           locations.value.length === 0 &&
           !searchError.value
  })

  return {
    locations,
    isSearching,
    searchError,
    searchQuery,
    hasNoResults,
    searchLocations,
    debouncedSearch,
    clearSearch,
    formatLocationName
  }
}
