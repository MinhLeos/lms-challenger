<template>
  <div class="relative">
    <!-- Toggle Button -->
    <button 
      type="button"
      class="flex items-center gap-2 bg-transparent border border-neutral-600 rounded-lg py-3 px-4 text-neutral-0 focus:outline focus:outline-neutral-0 focus:outline-offset-4 active:outline active:outline-neutral-0 active:outline-offset-4"
      @click="toggleDropdown"
    >
      <img 
        src="~/assets/images/icon-units.svg" 
        alt="" 
        role="presentation"
        class="w-5 h-5"
      />
      <span class="text-sm font-medium">Units</span>
      <svg 
        class="w-4 h-4 ml-1 transition-transform duration-200" 
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-60 bg-neutral-800 border border-neutral-600 rounded-xl shadow-xl z-50 overflow-hidden"
      >
        <!-- Header - Switch Action -->
        <button 
          type="button"
          class="w-full px-4 py-3 text-left text-neutral-0 font-semibold hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700 transition-colors border-b border-neutral-700"
          @click="switchAllUnits"
        >
          Switch to {{ isMetric ? 'Imperial' : 'Metric' }}
        </button>

        <!-- Temperature Section -->
        <div class="py-2">
          <p class="px-4 py-1 text-neutral-400 text-sm">Temperature</p>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectTemperature('celsius')"
          >
            <span>Celsius (°C)</span>
            <svg v-if="temperature === 'celsius'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectTemperature('fahrenheit')"
          >
            <span>Fahrenheit (°F)</span>
            <svg v-if="temperature === 'fahrenheit'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>

        <!-- Wind Speed Section -->
        <div class="py-2 border-t border-neutral-700">
          <p class="px-4 py-1 text-neutral-400 text-sm">Wind Speed</p>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectWindSpeed('kmh')"
          >
            <span>km/h</span>
            <svg v-if="windSpeed === 'kmh'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectWindSpeed('mph')"
          >
            <span>mph</span>
            <svg v-if="windSpeed === 'mph'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>

        <!-- Precipitation Section -->
        <div class="py-2 border-t border-neutral-700">
          <p class="px-4 py-1 text-neutral-400 text-sm">Precipitation</p>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectPrecipitation('mm')"
          >
            <span>Millimeters (mm)</span>
            <svg v-if="precipitation === 'mm'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button 
            type="button"
            class="w-full flex items-center justify-between mx-2 px-2 py-2.5 text-neutral-0 hover:bg-neutral-700 rounded-lg focus:outline focus:outline-2 focus:outline-neutral-0 transition-colors"
            style="width: calc(100% - 16px);"
            @click="selectPrecipitation('inch')"
          >
            <span>Inches (in)</span>
            <svg v-if="precipitation === 'inch'" class="w-5 h-5 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Backdrop to close dropdown -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40" 
      @click="isOpen = false"
    />
  </div>
</template>

<script lang="ts" setup>
import type { UnitSystem } from '~/types/Weather'

const props = withDefaults(defineProps<{
  modelValue?: UnitSystem
}>(), {
  modelValue: 'metric'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: UnitSystem): void
  (e: 'change', value: UnitSystem): void
}>()

// Dropdown state
const isOpen = ref(false)

// Individual unit selections
const temperature = ref<'celsius' | 'fahrenheit'>(props.modelValue === 'metric' ? 'celsius' : 'fahrenheit')
const windSpeed = ref<'kmh' | 'mph'>(props.modelValue === 'metric' ? 'kmh' : 'mph')
const precipitation = ref<'mm' | 'inch'>(props.modelValue === 'metric' ? 'mm' : 'inch')

// Computed
const isMetric = computed(() => {
  return temperature.value === 'celsius' && windSpeed.value === 'kmh' && precipitation.value === 'mm'
})

// Methods
function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function switchAllUnits() {
  if (isMetric.value) {
    temperature.value = 'fahrenheit'
    windSpeed.value = 'mph'
    precipitation.value = 'inch'
  } else {
    temperature.value = 'celsius'
    windSpeed.value = 'kmh'
    precipitation.value = 'mm'
  }
  emitChange()
}

function selectTemperature(value: 'celsius' | 'fahrenheit') {
  temperature.value = value
  emitChange()
}

function selectWindSpeed(value: 'kmh' | 'mph') {
  windSpeed.value = value
  emitChange()
}

function selectPrecipitation(value: 'mm' | 'inch') {
  precipitation.value = value
  emitChange()
}

function emitChange() {
  const newUnit: UnitSystem = temperature.value === 'celsius' ? 'metric' : 'imperial'
  emit('update:modelValue', newUnit)
  emit('change', newUnit)
}

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
  if (newVal === 'metric') {
    temperature.value = 'celsius'
    windSpeed.value = 'kmh'
    precipitation.value = 'mm'
  } else {
    temperature.value = 'fahrenheit'
    windSpeed.value = 'mph'
    precipitation.value = 'inch'
  }
})
</script>
