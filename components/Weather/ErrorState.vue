<template>
  <div class="flex flex-col items-center justify-center px-4">
    <!-- Error Icon - Ban/Prohibited circle -->
    <div class="w-20 h-20 mb-6 flex items-center justify-center">
      <svg class="w-20 h-20 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke-width="1.5" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke-width="1.5" />
      </svg>
    </div>
    
    <!-- Error Title -->
    <h2 class="font-bricolage text-2xl font-bold text-neutral-0 mb-2">
      Something went wrong
    </h2>
    
    <!-- Error Message -->
    <p class="text-neutral-400 text-center max-w-md mb-6">
      {{ message || 'We couldn\'t connect to the server (API error). Please try again in a few moments.' }}
    </p>
    
    <!-- Retry Button -->
    <button 
      type="button"
      class="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-0 font-medium px-5 py-2.5 rounded-lg transition-colors focus:outline focus:outline-2 focus:outline-neutral-0 focus:outline-offset-4"
      @click="$emit('retry')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Retry
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message?: string
}>()

defineEmits<{
  (e: 'retry'): void
}>()
</script>
