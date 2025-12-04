<template>
  <div class="weather-app">
    <!-- Search Section with Button - Always visible -->
    <section class="w-full mb-8 flex items-center justify-center">
      <div class="flex gap-3 max-w-xl flex-col lg:flex-row w-full">
        <div class="flex-1">
          <WeatherSearchBar 
            v-model="searchQuery"
            @select="handleLocationSelect"
          />
        </div>
        <button 
          class="bg-blue-500 hover:bg-blue-600 text-neutral-0 font-semibold px-6 py-3 rounded-xl transition-colors focus:outline focus:outline-2 focus:outline-neutral-0 focus:outline-offset-4 whitespace-nowrap"
          @click="handleSearchClick"
        >
          Search
        </button>
      </div>
    </section>

    <!-- Loading State -->
    <WeatherLoadingState v-if="isLoading" />

    <!-- Error State -->
    <WeatherErrorState 
      v-else-if="error && !weather" 
      :message="error"
      @retry="retryFetch"
    />

    <!-- No Results State (No search yet) -->
    <WeatherNoResults v-else-if="!weather && !selectedLocation" />

    <!-- Weather Data Display -->
    <template v-else>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <!-- Left Column: Current Weather + Metrics + Daily Forecast -->
        <div class="space-y-6">
          <!-- Current Weather Card -->
          <WeatherCurrentWeather 
            v-if="weather?.current && selectedLocation"
            :weather="weather.current"
            :location="selectedLocation"
            :unit="unit"
          />

          <!-- Weather Metrics Grid -->
          <WeatherMetrics 
            v-if="weather?.current"
            :weather="weather.current"
            :unit="unit"
          />

          <!-- Daily Forecast -->
          <WeatherDailyForecast 
            v-if="weather?.daily"
            :forecast="weather.daily"
            :unit="unit"
          />
        </div>

        <!-- Right Column: Hourly Forecast -->
        <div class="bg-neutral-800 rounded-2xl p-4 pr-0">
          <div class="flex items-center justify-between mb-4 pr-4">
            <h3 class="text-neutral-0 font-semibold">Hourly forecast</h3>
            <WeatherDaySelector 
              v-if="weather?.daily"
              v-model="selectedDayIndex"
              :days="weather.daily"
              compact
            />
          </div>
          
          <!-- Hourly Items -->
          <WeatherHourlyForecast 
            :hourly="currentDayHourly"
            :unit="unit"
            vertical
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Location, UnitSystem } from '~/types/Weather'
import { useWeather } from '~/composables/useWeather'
import { useGeocoding } from '~/composables/useGeocoding'

definePageMeta({
  layout: 'challenger-six'
})

// Inject unit from layout
const unit = inject<Ref<UnitSystem>>('weatherUnit', ref('metric'))

// Composables
const { weather, location: selectedLocation, isLoading, error, fetchWeather, getHourlyForDay } = useWeather()

// Provide error/loading state to layout
const hasError = computed(() => !!error.value && !weather.value)
const isLoadingState = computed(() => isLoading.value)
provide('hasError', hasError)
provide('isLoading', isLoadingState)

// Local state
const searchQuery = ref('')
const selectedDayIndex = ref(0)

// Get hourly forecast for selected day
const currentDayHourly = computed(() => {
  if (!weather.value?.hourly) return []
  return getHourlyForDay(selectedDayIndex.value)
})

// Handle location selection from search
async function handleLocationSelect(location: Location) {
  searchQuery.value = location.name
  await fetchWeather(location, unit.value)
}

// Watch for unit changes from layout
watch(unit, async (newUnit) => {
  if (selectedLocation.value) {
    await fetchWeather(selectedLocation.value, newUnit)
  }
})

// Geocoding for suggestion clicks
const { searchLocations } = useGeocoding()

// Handle suggestion click from NoResults
async function handleSuggestionClick(query: string) {
  searchQuery.value = query
  const results = await searchLocations(query)
  if (results.length > 0) {
    await handleLocationSelect(results[0])
  }
}

// Handle search button click
async function handleSearchClick() {
  if (searchQuery.value.trim()) {
    const results = await searchLocations(searchQuery.value)
    if (results.length > 0) {
      await handleLocationSelect(results[0])
    }
  }
}

// Retry fetch after error
async function retryFetch() {
  if (selectedLocation.value) {
    await fetchWeather(selectedLocation.value, unit.value)
  }
}

// Load default location on mount (optional - Ho Chi Minh City)
onMounted(async () => {
  // Uncomment to auto-load a default city
  // const defaultLocation: Location = {
  //   id: 1566083,
  //   name: 'Ho Chi Minh City',
  //   latitude: 10.8231,
  //   longitude: 106.6297,
  //   country: 'Vietnam'
  // }
  // await fetchWeather(defaultLocation, unit.value)
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: hsl(243, 23%, 30%) transparent;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: hsl(243, 23%, 30%);
  border-radius: 3px;
}
</style>

