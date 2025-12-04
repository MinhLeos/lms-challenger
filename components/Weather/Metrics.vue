<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Feels Like -->
    <div class="bg-neutral-700 rounded-xl p-4">
      <p class="text-neutral-400 text-sm mb-2">Feels Like</p>
      <p class="text-2xl font-normal text-neutral-0">{{ formattedFeelsLike }}</p>
    </div>
    
    <!-- Humidity -->
    <div class="bg-neutral-700 rounded-xl p-4">
      <p class="text-neutral-400 text-sm mb-2">Humidity</p>
      <p class="text-2xl font-normal text-neutral-0">{{ formattedHumidity }}</p>
    </div>
    
    <!-- Wind Speed -->
    <div class="bg-neutral-700 rounded-xl p-4">
      <p class="text-neutral-400 text-sm mb-2">Wind</p>
      <p class="text-2xl font-normal text-neutral-0">{{ formattedWind }}</p>
    </div>
    
    <!-- Precipitation -->
    <div class="bg-neutral-700 rounded-xl p-4">
      <p class="text-neutral-400 text-sm mb-2">Precipitation</p>
      <p class="text-2xl font-normal text-neutral-0">{{ formattedPrecipitation }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CurrentWeather, UnitSystem } from '~/types/Weather'
import { formatHumidity } from '~/utils/weather-constants'
import { useUnits } from '~/composables/useUnits'

const props = defineProps<{
  weather: CurrentWeather
  unit: UnitSystem
}>()

const { formatTemp, formatWind, formatPrecip } = useUnits()

// Computed properties
const formattedFeelsLike = computed(() => formatTemp(props.weather.feelsLike, props.unit))
const formattedHumidity = computed(() => formatHumidity(props.weather.humidity))
const formattedWind = computed(() => formatWind(props.weather.windSpeed, props.unit))
const formattedPrecipitation = computed(() => formatPrecip(props.weather.precipitation, props.unit))
</script>
