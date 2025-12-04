import { WEATHER_CODES, DEFAULT_WEATHER_ICON } from '~/utils/weather-constants'
import type { WeatherIconInfo } from '~/types/Weather'

export function useWeatherIcon() {
  // Get weather info (icon filename + label) by code
  function getWeatherInfo(code: number): WeatherIconInfo {
    return WEATHER_CODES[code] || DEFAULT_WEATHER_ICON
  }

  // Get icon filename only
  function getIconName(code: number): string {
    return getWeatherInfo(code).icon
  }

  // Get weather label/description
  function getWeatherLabel(code: number): string {
    return getWeatherInfo(code).label
  }

  // Get full image path for use in templates
  // Note: In Nuxt, we use ~/assets/images/ path
  function getIconPath(code: number): string {
    const iconName = getIconName(code)
    return `~/assets/images/${iconName}`
  }

  // Get icon URL for dynamic imports
  function getIconUrl(code: number): string {
    const iconName = getIconName(code)
    return new URL(`../assets/images/${iconName}`, import.meta.url).href
  }

  // Check if weather is clear/sunny
  function isClear(code: number): boolean {
    return code === 0
  }

  // Check if weather is cloudy
  function isCloudy(code: number): boolean {
    return [1, 2, 3].includes(code)
  }

  // Check if weather is rainy
  function isRainy(code: number): boolean {
    return [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)
  }

  // Check if weather is snowy
  function isSnowy(code: number): boolean {
    return [71, 73, 75, 77, 85, 86].includes(code)
  }

  // Check if weather is stormy
  function isStormy(code: number): boolean {
    return [95, 96, 99].includes(code)
  }

  // Check if weather is foggy
  function isFoggy(code: number): boolean {
    return [45, 48].includes(code)
  }

  // Get weather condition category
  function getWeatherCategory(code: number): 'clear' | 'cloudy' | 'rainy' | 'snowy' | 'stormy' | 'foggy' | 'unknown' {
    if (isClear(code)) return 'clear'
    if (isCloudy(code)) return 'cloudy'
    if (isRainy(code)) return 'rainy'
    if (isSnowy(code)) return 'snowy'
    if (isStormy(code)) return 'stormy'
    if (isFoggy(code)) return 'foggy'
    return 'unknown'
  }

  return {
    getWeatherInfo,
    getIconName,
    getWeatherLabel,
    getIconPath,
    getIconUrl,
    isClear,
    isCloudy,
    isRainy,
    isSnowy,
    isStormy,
    isFoggy,
    getWeatherCategory
  }
}
