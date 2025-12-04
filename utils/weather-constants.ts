import type { WeatherIconInfo, UnitConfig } from '~/types/Weather'

// Weather Code to Icon/Label Mapping
// Based on WMO Weather interpretation codes
// https://open-meteo.com/en/docs
export const WEATHER_CODES: Record<number, WeatherIconInfo> = {
  // Clear
  0: { icon: 'icon-sunny.webp', label: 'Clear sky' },
  
  // Mainly clear, partly cloudy, overcast
  1: { icon: 'icon-partly-cloudy.webp', label: 'Mainly clear' },
  2: { icon: 'icon-partly-cloudy.webp', label: 'Partly cloudy' },
  3: { icon: 'icon-overcast.webp', label: 'Overcast' },
  
  // Fog
  45: { icon: 'icon-fog.webp', label: 'Fog' },
  48: { icon: 'icon-fog.webp', label: 'Depositing rime fog' },
  
  // Drizzle
  51: { icon: 'icon-drizzle.webp', label: 'Light drizzle' },
  53: { icon: 'icon-drizzle.webp', label: 'Moderate drizzle' },
  55: { icon: 'icon-drizzle.webp', label: 'Dense drizzle' },
  
  // Freezing Drizzle
  56: { icon: 'icon-drizzle.webp', label: 'Light freezing drizzle' },
  57: { icon: 'icon-drizzle.webp', label: 'Dense freezing drizzle' },
  
  // Rain
  61: { icon: 'icon-rain.webp', label: 'Slight rain' },
  63: { icon: 'icon-rain.webp', label: 'Moderate rain' },
  65: { icon: 'icon-rain.webp', label: 'Heavy rain' },
  
  // Freezing Rain
  66: { icon: 'icon-rain.webp', label: 'Light freezing rain' },
  67: { icon: 'icon-rain.webp', label: 'Heavy freezing rain' },
  
  // Snow fall
  71: { icon: 'icon-snow.webp', label: 'Slight snow fall' },
  73: { icon: 'icon-snow.webp', label: 'Moderate snow fall' },
  75: { icon: 'icon-snow.webp', label: 'Heavy snow fall' },
  
  // Snow grains
  77: { icon: 'icon-snow.webp', label: 'Snow grains' },
  
  // Rain showers
  80: { icon: 'icon-rain.webp', label: 'Slight rain showers' },
  81: { icon: 'icon-rain.webp', label: 'Moderate rain showers' },
  82: { icon: 'icon-rain.webp', label: 'Violent rain showers' },
  
  // Snow showers
  85: { icon: 'icon-snow.webp', label: 'Slight snow showers' },
  86: { icon: 'icon-snow.webp', label: 'Heavy snow showers' },
  
  // Thunderstorm
  95: { icon: 'icon-storm.webp', label: 'Thunderstorm' },
  96: { icon: 'icon-storm.webp', label: 'Thunderstorm with slight hail' },
  99: { icon: 'icon-storm.webp', label: 'Thunderstorm with heavy hail' },
}

// Default icon for unknown weather codes
export const DEFAULT_WEATHER_ICON: WeatherIconInfo = {
  icon: 'icon-overcast.webp',
  label: 'Unknown'
}

// Get weather info by code
export function getWeatherInfo(code: number): WeatherIconInfo {
  return WEATHER_CODES[code] || DEFAULT_WEATHER_ICON
}

// Get weather icon path
export function getWeatherIconPath(code: number): string {
  const info = getWeatherInfo(code)
  return `/assets/images/${info.icon}`
}

// Unit configurations
export const UNIT_CONFIGS: Record<'metric' | 'imperial', UnitConfig> = {
  metric: {
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm'
  },
  imperial: {
    temperature: 'fahrenheit',
    windSpeed: 'mph',
    precipitation: 'inch'
  }
}

// Unit labels
export const UNIT_LABELS = {
  metric: {
    temperature: '°C',
    windSpeed: 'km/h',
    precipitation: 'mm'
  },
  imperial: {
    temperature: '°F',
    windSpeed: 'mph',
    precipitation: 'in'
  }
}

// API Base URLs
export const API_BASE_URL = 'https://api.open-meteo.com/v1'
export const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1'

// Day names
export const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const DAY_NAMES_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Format day name from date string
export function getDayName(dateString: string, short: boolean = true): string {
  const date = new Date(dateString)
  const dayIndex = date.getDay()
  return short ? DAY_NAMES[dayIndex] : DAY_NAMES_FULL[dayIndex]
}

// Check if date is today
export function isToday(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

// Format time from ISO string (e.g., "2025-12-03T14:00" -> "14:00")
export function formatTime(isoString: string): string {
  const date = new Date(isoString)
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
}

// Format temperature with unit
export function formatTemperature(temp: number, unit: 'metric' | 'imperial'): string {
  const rounded = Math.round(temp)
  return `${rounded}${UNIT_LABELS[unit].temperature}`
}

// Format wind speed with unit
export function formatWindSpeed(speed: number, unit: 'metric' | 'imperial'): string {
  const rounded = Math.round(speed)
  return `${rounded} ${UNIT_LABELS[unit].windSpeed}`
}

// Format precipitation with unit
export function formatPrecipitation(amount: number, unit: 'metric' | 'imperial'): string {
  const formatted = amount.toFixed(1)
  return `${formatted} ${UNIT_LABELS[unit].precipitation}`
}

// Format humidity
export function formatHumidity(humidity: number): string {
  return `${Math.round(humidity)}%`
}
