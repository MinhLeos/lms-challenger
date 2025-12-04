<template>
  <div>
    <h3 class="text-neutral-0 font-semibold mb-4">Daily forecast</h3>
    <!-- Mobile: 3 cols, Desktop: 7 cols -->
    <div class="grid grid-cols-3 md:grid-cols-7 gap-3">
      <!-- Day Card -->
      <div 
        v-for="day in forecast" 
        :key="day.date"
        class="bg-neutral-800 rounded-2xl p-4 flex flex-col items-center"
      >
        <!-- Day Name -->
        <p class="text-neutral-200 text-sm font-medium mb-3">
          {{ day.dayName }}
        </p>
        
        <!-- Weather Icon -->
        <WeatherIcon 
          :code="day.weatherCode" 
          size="md"
          class="mb-3"
        />
        
        <!-- Temperature Range -->
        <div class="flex items-center justify-between w-full text-sm">
          <span class="font-semibold">{{ formatTemp(day.tempMax) }}</span>
          <span class="text-neutral-400">{{ formatTemp(day.tempMin) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DailyForecast, UnitSystem } from '~/types/Weather'
import { useUnits } from '~/composables/useUnits'

const props = defineProps<{
  forecast: DailyForecast[]
  unit: UnitSystem
}>()

const { formatTemp } = useUnits()
</script>
