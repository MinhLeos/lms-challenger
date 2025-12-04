<template>
  <!-- Vertical Layout -->
  <div v-if="vertical" ref="scrollContainer" class="space-y-3 max-h-[520px] overflow-y-auto scrollbar-thin" :class="hasScrollbar ? 'pr-2.5' : 'pr-4'">
    <div 
      v-for="hour in hourly.slice(0, 8)" 
      :key="hour.time" 
      class="flex items-center justify-between py-2.5 px-4 bg-neutral-700 border border-neutral-600 rounded-xl"
    >
      <!-- Weather Icon + Time -->
      <div class="flex items-center gap-3">
        <WeatherIcon 
          :code="hour.weatherCode" 
          size="sm"
        />
        <p class="text-neutral-0 font-normal">{{ formatHourTime(hour.time) }}</p>
      </div>
      
      <!-- Temperature -->
      <p class="font-normal text-neutral-0">{{ formatTemp(hour.temperature) }}</p>
    </div>

    <!-- Empty State -->
    <div 
      v-if="hourly.length === 0" 
      class="flex items-center justify-center py-8 text-neutral-400"
    >
      <p>No hourly data</p>
    </div>
  </div>

  <!-- Horizontal Layout (default) -->
  <div v-else class="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
    <div 
      v-for="hour in hourly" 
      :key="hour.time" 
      class="flex flex-col items-center gap-2 min-w-[80px] bg-neutral-700 rounded-xl p-4 flex-shrink-0 hover:bg-neutral-600 transition-colors"
    >
      <!-- Time -->
      <p class="text-neutral-300 text-sm">{{ formatHourTime(hour.time) }}</p>
      
      <!-- Weather Icon -->
      <WeatherIcon 
        :code="hour.weatherCode" 
        size="sm"
      />
      
      <!-- Temperature -->
      <p class="font-semibold">{{ formatTemp(hour.temperature) }}</p>
    </div>

    <!-- Empty State -->
    <div 
      v-if="hourly.length === 0" 
      class="flex items-center justify-center w-full py-8 text-neutral-300"
    >
      <p>No hourly data available</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HourlyForecast, UnitSystem } from '~/types/Weather'
import { formatTime } from '~/utils/weather-constants'
import { useUnits } from '~/composables/useUnits'

const props = withDefaults(defineProps<{
  hourly: HourlyForecast[]
  unit: UnitSystem
  vertical?: boolean
}>(), {
  vertical: false
})

const { formatTemp } = useUnits()

// Scroll container ref
const scrollContainer = ref<HTMLElement | null>(null)
const hasScrollbar = ref(false)

// Check if scrollbar is visible
function checkScrollbar() {
  if (scrollContainer.value) {
    hasScrollbar.value = scrollContainer.value.scrollHeight > scrollContainer.value.clientHeight
  }
}

// Watch for changes in hourly data
watch(() => props.hourly, () => {
  nextTick(() => checkScrollbar())
}, { immediate: true })

onMounted(() => {
  nextTick(() => checkScrollbar())
})

// Format hour time (e.g., "3 PM")
function formatHourTime(isoString: string): string {
  const date = new Date(isoString)
  const hours = date.getHours()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const hour12 = hours % 12 || 12
  return `${hour12} ${ampm}`
}
</script>

<style scoped>
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: hsl(243, 23%, 30%) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: hsl(243, 23%, 30%);
  border-radius: 3px;
}
</style>
