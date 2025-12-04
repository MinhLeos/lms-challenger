<template>
  <div class="bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[280px]">
    <!-- Background Stars/Decorations -->
    <div class="absolute top-6 left-8 w-2 h-2 bg-neutral-0/40 rounded-full"></div>
    <div class="absolute top-10 right-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
    <div class="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
    <div class="absolute bottom-8 right-1/4 w-2 h-2 bg-neutral-0/30 rounded-full"></div>
    
    <!-- Mobile Layout: Vertical stacked, centered -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center min-h-[240px] md:hidden">
      <!-- Location & Date - Top Center -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-neutral-0">{{ locationName }}, {{ locationCountry }}</h2>
        <p class="text-neutral-200 text-sm mt-1">{{ currentDate }}</p>
      </div>
      
      <!-- Weather Icon & Temperature - Bottom Center -->
      <div class="flex items-center gap-3">
        <WeatherIcon 
          :code="weatherCode" 
          size="lg"
        />
        <h2 class="font-bricolage text-6xl font-bold italic text-neutral-0">
          {{ formattedTemperature }}
        </h2>
      </div>
    </div>

    <!-- Desktop Layout: Horizontal, space-between -->
    <div class="relative z-10 h-full hidden md:flex items-center justify-between min-h-[230px]">
      <!-- Location & Date - Left Center -->
      <div>
        <h2 class="text-3xl font-semibold text-neutral-0">{{ locationName }}, {{ locationCountry }}</h2>
        <p class="text-neutral-200 text-sm mt-1">{{ currentDate }}</p>
      </div>
      
      <!-- Weather Icon & Temperature - Right Center -->
      <div class="flex items-center gap-3">
        <WeatherIcon 
          :code="weatherCode" 
          size="lg"
        />
        <h2 class="font-bricolage text-8xl font-bold italic text-neutral-0">
          {{ formattedTemperature }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CurrentWeather, Location, UnitSystem } from '~/types/Weather'
import { useUnits } from '~/composables/useUnits'

const props = defineProps<{
  weather: CurrentWeather
  location: Location
  unit: UnitSystem
}>()

const { formatTemp } = useUnits()

// Computed properties
const formattedTemperature = computed(() => {
  return formatTemp(props.weather.temperature, props.unit)
})

const locationName = computed(() => props.location.name)
const locationCountry = computed(() => props.location.country)
const weatherCode = computed(() => props.weather.weatherCode)

// Format current date
const currentDate = computed(() => {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }
  return now.toLocaleDateString('en-US', options)
})
</script>
