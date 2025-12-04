<template>
  <div class="space-y-6">
    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
      <!-- Left Column -->
      <div class="space-y-6">
        <!-- Current Weather Card with Loading -->
        <div class="bg-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center h-[294px]">
          <!-- Three dots loading -->
          <div class="flex gap-2 mb-3">
            <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
            <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
            <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
          </div>
          <p class="text-neutral-400 text-sm">Loading...</p>
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-neutral-800 rounded-xl p-4 h-[92px]">
            <p class="text-neutral-400 text-sm mb-2">Feels Like</p>
            <p class="text-neutral-500">—</p>
          </div>
          <div class="bg-neutral-800 rounded-xl p-4 h-[92px]">
            <p class="text-neutral-400 text-sm mb-2">Humidity</p>
            <p class="text-neutral-500">—</p>
          </div>
          <div class="bg-neutral-800 rounded-xl p-4 h-[92px]">
            <p class="text-neutral-400 text-sm mb-2">Wind</p>
            <p class="text-neutral-500">—</p>
          </div>
          <div class="bg-neutral-800 rounded-xl p-4 h-[92px]">
            <p class="text-neutral-400 text-sm mb-2">Precipitation</p>
            <p class="text-neutral-500">—</p>
          </div>
        </div>

        <!-- Daily Forecast -->
        <div>
          <h3 class="text-neutral-0 font-semibold mb-4">Daily forecast</h3>
          <div class="flex gap-3">
            <div v-for="i in 7" :key="i" class="flex-1 bg-neutral-800 rounded-2xl h-36"></div>
          </div>
        </div>
      </div>

      <!-- Right Column - Hourly Forecast -->
      <div class="bg-neutral-800 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-neutral-0 font-semibold">Hourly forecast</h3>
          <div class="h-8 w-16 bg-neutral-700 rounded-lg"></div>
        </div>
        <div class="space-y-3">
          <div v-for="i in 8" :key="i" class="h-[54px] bg-neutral-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Loading state component - no props needed
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce {
  animation: bounce 0.6s infinite;
}
</style>
