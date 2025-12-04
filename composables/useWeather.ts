import type { 
  Location, 
  WeatherData, 
  WeatherAPIResponse,
  CurrentWeather,
  HourlyForecast,
  DailyForecast,
  UnitSystem 
} from '~/types/Weather'
import { API_BASE_URL, getDayName, isToday } from '~/utils/weather-constants'

export function useWeather() {
  // State
  const weather = ref<WeatherData | null>(null)
  const location = ref<Location | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Fetch weather data for a location
  async function fetchWeather(loc: Location, unit: UnitSystem = 'metric'): Promise<WeatherData | null> {
    isLoading.value = true
    error.value = null
    location.value = loc

    try {
      const config = unit === 'metric' 
        ? { temperature: 'celsius', windSpeed: 'kmh', precipitation: 'mm' }
        : { temperature: 'fahrenheit', windSpeed: 'mph', precipitation: 'inch' }

      const url = new URL(`${API_BASE_URL}/forecast`)
      url.searchParams.set('latitude', loc.latitude.toString())
      url.searchParams.set('longitude', loc.longitude.toString())
      url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m')
      url.searchParams.set('hourly', 'temperature_2m,weather_code')
      url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min')
      url.searchParams.set('timezone', 'auto')
      url.searchParams.set('temperature_unit', config.temperature)
      url.searchParams.set('wind_speed_unit', config.windSpeed)
      url.searchParams.set('precipitation_unit', config.precipitation)

      const response = await fetch(url.toString())
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`)
      }

      const data: WeatherAPIResponse = await response.json()
      
      // Transform API response to our data structure
      weather.value = transformWeatherData(data)
      return weather.value
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch weather data'
      error.value = message
      weather.value = null
      return null
    } finally {
      isLoading.value = false
    }
  }

  // Transform raw API response to our WeatherData structure
  function transformWeatherData(data: WeatherAPIResponse): WeatherData {
    // Current weather
    const current: CurrentWeather = {
      temperature: data.current?.temperature_2m ?? 0,
      feelsLike: data.current?.apparent_temperature ?? 0,
      humidity: data.current?.relative_humidity_2m ?? 0,
      windSpeed: data.current?.wind_speed_10m ?? 0,
      precipitation: data.current?.precipitation ?? 0,
      weatherCode: data.current?.weather_code ?? 0,
      time: data.current?.time
    }

    // Hourly forecast (next 24 hours)
    const hourly: HourlyForecast[] = []
    if (data.hourly?.time) {
      const now = new Date()
      const currentHour = now.getHours()
      
      // Find the index of current hour and get next 24 hours
      for (let i = 0; i < Math.min(data.hourly.time.length, 168); i++) {
        const time = new Date(data.hourly.time[i])
        if (time >= now || (time.getDate() === now.getDate() && time.getHours() >= currentHour)) {
          hourly.push({
            time: data.hourly.time[i],
            temperature: data.hourly.temperature_2m[i],
            weatherCode: data.hourly.weather_code[i]
          })
          if (hourly.length >= 24) break
        }
      }
    }

    // Daily forecast (7 days)
    const daily: DailyForecast[] = []
    if (data.daily?.time) {
      for (let i = 0; i < Math.min(data.daily.time.length, 7); i++) {
        const dateStr = data.daily.time[i]
        daily.push({
          date: dateStr,
          dayName: getDayName(dateStr),
          fullDayName: getDayName(dateStr, false),
          weatherCode: data.daily.weather_code[i],
          tempMax: data.daily.temperature_2m_max[i],
          tempMin: data.daily.temperature_2m_min[i]
        })
      }
    }

    return {
      current,
      hourly,
      daily,
      timezone: data.timezone
    }
  }

  // Get hourly forecast for a specific day (0 = today, 1 = tomorrow, etc.)
  function getHourlyForDay(dayIndex: number): HourlyForecast[] {
    if (!weather.value?.hourly) return []
    
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + dayIndex)
    const targetDateStr = targetDate.toISOString().split('T')[0]

    return weather.value.hourly.filter(h => h.time.startsWith(targetDateStr))
  }

  // Refresh weather data with current location
  async function refresh(unit?: UnitSystem): Promise<void> {
    if (location.value) {
      await fetchWeather(location.value, unit)
    }
  }

  // Clear weather data
  function clearWeather(): void {
    weather.value = null
    location.value = null
    error.value = null
  }

  // Computed properties
  const hasWeather = computed(() => weather.value !== null)
  const hasError = computed(() => error.value !== null)

  return {
    weather,
    location,
    isLoading,
    error,
    hasWeather,
    hasError,
    fetchWeather,
    getHourlyForDay,
    refresh,
    clearWeather
  }
}
