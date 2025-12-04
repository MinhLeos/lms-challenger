<template>
  <!-- Compact Mode (Dropdown) -->
  <div v-if="compact" class="relative">
    <button 
      class="flex items-center gap-2 bg-transparent border border-neutral-600 rounded-lg px-3 py-1.5 text-sm text-neutral-0 hover:bg-neutral-700 transition-colors"
      @click="isOpen = !isOpen"
    >
      {{ days[modelValue]?.fullDayName || 'Select' }}
      <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Dropdown -->
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
        class="absolute right-0 mt-2 bg-neutral-800 rounded-xl shadow-lg z-10 min-w-[160px] overflow-hidden py-2"
      >
        <button 
          v-for="(day, index) in days" 
          :key="day.date"
          class="w-full px-4 py-2.5 text-left text-base text-neutral-0 hover:bg-neutral-700 transition-colors"
          @click="selectDay(index); isOpen = false"
        >
          {{ day.fullDayName }}
        </button>
      </div>
    </Transition>
    
    <!-- Backdrop -->
    <div v-if="isOpen" class="fixed inset-0 z-0" @click="isOpen = false" />
  </div>

  <!-- Default Mode (Tabs) -->
  <div v-else class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
    <button 
      v-for="(day, index) in days" 
      :key="day.date"
      :class="[
        'px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0',
        modelValue === index 
          ? 'bg-orange-500 text-neutral-900' 
          : 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600'
      ]"
      @click="selectDay(index)"
    >
      {{ day.dayName }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { DailyForecast } from '~/types/Weather'

const props = withDefaults(defineProps<{
  days: DailyForecast[]
  modelValue?: number
  compact?: boolean
}>(), {
  modelValue: 0,
  compact: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'select', index: number): void
}>()

const isOpen = ref(false)

function selectDay(index: number) {
  emit('update:modelValue', index)
  emit('select', index)
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
