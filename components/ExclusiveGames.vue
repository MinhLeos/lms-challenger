<template>
  <div class="bg-[#06142e] py-8">
    <div class="max-w-[1440px] mx-auto px-4">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-white text-lg font-semibold uppercase">Exclusive Games</h2>
        <button class="text-white text-sm uppercase hover:underline flex items-center gap-1">
          See All
          <span class="text-lg">☰</span>
        </button>
      </div>

      <!-- Horizontal Scroll -->
      <div
        ref="scrollContainer"
        class="flex gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(game, index) in games"
          :key="index"
          class="relative min-w-[160px] sm:min-w-[180px] md:min-w-[200px] bg-[#0e2343] rounded-xl p-2 flex-shrink-0"
        >
          <!-- Badge -->
          <div v-if="game.badge" class="absolute top-2 -left-[11px] z-10">
            <div
              :class="[
                'text-white text-[10px] font-bold px-3 py-1 rounded-sm inline-block relative',
                game.badge === 'HOT'
                  ? 'bg-gradient-to-r from-red-500 to-pink-500'
                  : 'bg-gradient-to-r from-green-400 to-green-500',
              ]"
              style="transform: skewX(-12deg)"
            >
              <span class="triangle-corner absolute top-5 left-0"></span>
              <span style="transform: skewX(12deg); display: inline-block">{{ game.badge }}</span>
              <!-- <span
                class="absolute -bottom-2 left-0 w-0 h-0 border-l-[12px] border-l-transparent"
                :class="game.badge === 'HOT' ? 'border-t-[8px] border-t-pink-600' : 'border-t-[8px] border-t-green-600'"
              /> -->
            </div>
          </div>

          <!-- Optional label -->
          <div
            v-if="game.label"
            class="absolute bottom-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full z-10"
          >
            {{ game.label }}
          </div>

          <!-- Image -->
          <img :src="game.image" :alt="game.title" class="rounded-lg w-full object-cover aspect-[3/4]" />

          <!-- Title + Provider -->
          <div class="mt-2 text-center text-white text-xs leading-tight">
            <div class="font-medium">{{ game.title }}</div>
            <div class="text-gray-400 text-[10px]">{{ game.provider }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const games = [
  {
    title: "Bluechip Space",
    provider: "100HP GAMING",
    badge: "HOT",
    label: "x 50,000",
    image: "/images/bluechip-space.jpg",
  },
  {
    title: "Trouble Jet",
    provider: "Veliplay",
    badge: "HOT",
    image: "/images/trouble-jet.jpg",
  },
  {
    title: "---",
    provider: "Evolution",
    badge: "NEW",
    image: "/images/new-1.jpg",
  },
  {
    title: "---",
    provider: "Veliplay",
    badge: "NEW",
    image: "/images/new-2.jpg",
  },
  {
    title: "Deep Dive",
    provider: "Veliplay",
    image: "/images/deep-dive.jpg",
  },
  {
    title: "Match",
    provider: "Veliplay",
    image: "/images/match.jpg",
  },
  {
    title: "Fury Balloon",
    provider: "Veliplay",
    badge: "HOT",
    image: "/images/fury-balloon.jpg",
  },
  {
    title: "Night Heist",
    provider: "Veliplay",
    image: "/images/night-heist.jpg",
  },
];

const scrollContainer = ref<HTMLElement | null>(null);
let isDown = false;
let startX = 0;
let scrollLeft = 0;

const handleMouseDown = (e: MouseEvent) => {
  isDown = true;
  startX = e.pageX - (scrollContainer.value?.offsetLeft || 0);
  scrollLeft = scrollContainer.value?.scrollLeft || 0;
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDown || !scrollContainer.value) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX) * 1.5;
  scrollContainer.value.scrollLeft = scrollLeft - walk;
};

const handleMouseUp = () => {
  isDown = false;
};

const handleTouchStart = (e: TouchEvent) => {
  isDown = true;
  startX = e.touches[0].pageX - (scrollContainer.value?.offsetLeft || 0);
  scrollLeft = scrollContainer.value?.scrollLeft || 0;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!isDown || !scrollContainer.value) return;
  const x = e.touches[0].pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX) * 1.5;
  scrollContainer.value.scrollLeft = scrollLeft - walk;
};

const handleTouchEnd = () => {
  isDown = false;
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.triangle-corner {
  width: 0;
  height: 0;
  border-left: 10px solid transparent; /* Màu xanh lá */
  border-bottom: 10px solid transparent;
  border-top: 10px solid #22c55e;
  border-right: 10px solid #22c55e;
  display: inline-block;
}
</style>
