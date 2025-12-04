<template>
  <div class="min-h-screen bg-neutral-900 font-dm-sans text-neutral-0">
    <!-- Background gradient overlay -->
    <div class="fixed inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 -z-10"></div>
    
    <!-- Main container -->
    <div class="relative min-h-screen">
      <!-- Header -->
      <header class="w-full py-6 px-4 md:px-8 lg:px-16">
        <div class="max-w-[1200px] mx-auto flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <img 
              src="~/assets/images/logo.svg" 
              alt="" 
              role="presentation"
              class="h-8 w-auto"
            />
          </div>
          
          <!-- Unit Toggle in Header -->
          <WeatherUnitToggle 
            v-model="unit"
            @change="handleUnitChange"
          />
        </div>
      </header>

      <!-- Main content -->
      <main class="w-full px-4 md:px-8 lg:px-16 pb-8">
        <!-- Title Section - Hidden during error/loading -->
        <div v-if="!hasError && !isLoading" class="max-w-[1200px] mx-auto mb-6 lg:mb-10">
          <h1 class="font-bricolage text-5xl md:text-4xl font-bold text-neutral-0 text-center">
            How's the sky looking today?
          </h1>
        </div>
        <div class="max-w-[1200px] mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UnitSystem } from '~/types/Weather'

// Unit state - will be provided to child pages
const unit = ref<UnitSystem>('metric')

// Inject error/loading state from page
const hasError = inject<Ref<boolean>>('hasError', ref(false))
const isLoading = inject<Ref<boolean>>('isLoading', ref(false))

function handleUnitChange(newUnit: UnitSystem) {
  unit.value = newUnit
}

// Provide unit state to pages
provide('weatherUnit', unit)
provide('setWeatherUnit', (newUnit: UnitSystem) => {
  unit.value = newUnit
})
</script>

<style scoped>
/* Custom styles for the weather layout */
</style>
