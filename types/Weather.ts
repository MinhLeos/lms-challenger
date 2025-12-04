// Location from Geocoding API
export interface Location {
  id: number
  name: string
  latitude: number
  longitude: number
  country: string
  country_code?: string
  admin1?: string // State/Province
  admin2?: string // City/District
  timezone?: string
}

// Geocoding API Response
export interface GeocodingResponse {
  results?: Location[]
  generationtime_ms?: number
}

// Current Weather Data
export interface CurrentWeather {
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
  precipitation: number
  weatherCode: number
  time?: string
}

// Hourly Forecast Item
export interface HourlyForecast {
  time: string
  temperature: number
  weatherCode: number
}

// Daily Forecast Item
export interface DailyForecast {
  date: string
  dayName: string
  fullDayName: string
  weatherCode: number
  tempMax: number
  tempMin: number
}

// Full Weather Data
export interface WeatherData {
  current: CurrentWeather
  hourly: HourlyForecast[]
  daily: DailyForecast[]
  timezone: string
}

// Raw API Response from Open-Meteo
export interface WeatherAPIResponse {
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  current?: {
    time: string
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    precipitation: number
    weather_code: number
    wind_speed_10m: number
  }
  hourly?: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
  }
  daily?: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

// Unit System
export type UnitSystem = 'metric' | 'imperial'

// Unit Configuration
export interface UnitConfig {
  temperature: 'celsius' | 'fahrenheit'
  windSpeed: 'kmh' | 'mph'
  precipitation: 'mm' | 'inch'
}

// Weather Icon Mapping
export interface WeatherIconInfo {
  icon: string
  label: string
}

// App State
export interface WeatherAppState {
  location: Location | null
  weather: WeatherData | null
  unit: UnitSystem
  isLoading: boolean
  error: string | null
  selectedDayIndex: number
}
