import type { UnitSystem } from '~/types/Weather'
import { UNIT_CONFIGS, UNIT_LABELS } from '~/utils/weather-constants'

export function useUnits() {
  // Reactive unit state - persisted in localStorage
  const unit = useState<UnitSystem>('weather-unit', () => 'metric')

  // Get current unit config for API calls
  const unitConfig = computed(() => UNIT_CONFIGS[unit.value])

  // Get current unit labels for display
  const unitLabels = computed(() => UNIT_LABELS[unit.value])

  // Toggle between metric and imperial
  function toggleUnit() {
    unit.value = unit.value === 'metric' ? 'imperial' : 'metric'
  }

  // Set specific unit
  function setUnit(newUnit: UnitSystem) {
    unit.value = newUnit
  }

  // Check if current unit is metric
  const isMetric = computed(() => unit.value === 'metric')

  // Check if current unit is imperial
  const isImperial = computed(() => unit.value === 'imperial')

  // Format temperature based on current unit or provided unit
  function formatTemp(temp: number, overrideUnit?: UnitSystem): string {
    const rounded = Math.round(temp)
    return `${rounded}°`
  }

  // Format wind speed based on current unit or provided unit
  function formatWind(speed: number, overrideUnit?: UnitSystem): string {
    const rounded = Math.round(speed)
    const labels = overrideUnit ? UNIT_LABELS[overrideUnit] : unitLabels.value
    return `${rounded} ${labels.windSpeed}`
  }

  // Format precipitation based on current unit or provided unit
  function formatPrecip(amount: number, overrideUnit?: UnitSystem): string {
    const formatted = amount.toFixed(1)
    const labels = overrideUnit ? UNIT_LABELS[overrideUnit] : unitLabels.value
    return `${formatted} ${labels.precipitation}`
  }

  return {
    unit,
    unitConfig,
    unitLabels,
    isMetric,
    isImperial,
    toggleUnit,
    setUnit,
    formatTemp,
    formatWind,
    formatPrecip
  }
}
