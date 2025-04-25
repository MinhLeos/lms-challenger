<template>
  <div class="w-full bg-[#051837] py-6">
    <div class="max-w-[1440px] mx-auto px-4">
      <div class="flex items-center justify-between mb-4 text-white text-sm uppercase">
        <h2 class="font-semibold">All Providers</h2>
        <button class="flex items-center gap-1 text-xs hover:underline">
          See All
          <span class="text-base">⬚⬚⬚</span>
          <!-- Thay bằng icon -->
        </button>
      </div>
      <div class="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth cursor-grab active:cursor-grabbing">
        <div
          v-for="provider in providers"
          :key="provider.name"
          class="min-w-[140px] md:min-w-[160px] flex-shrink-0 bg-[#0f264b] rounded-lg p-4 text-center text-white"
        >
          <img :src="provider.logo" :alt="provider.name" class="h-8 mx-auto mb-3 object-contain" />
          <p class="text-sm font-semibold truncate">{{ provider.name }}</p>
          <p class="text-xs text-white/70">{{ provider.games }} games</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Provider {
  name: string;
  logo: string;
  games: number;
}

const providers: Provider[] = [
  {
    name: "Evolution",
    logo: "/logos/evolution.png",
    games: 312,
  },
  {
    name: "Spribe",
    logo: "/logos/spribe.png",
    games: 12,
  },
  {
    name: "VeltPlay",
    logo: "/logos/veltplay.png",
    games: 9,
  },
  {
    name: "Turbo Games",
    logo: "/logos/turbo.png",
    games: 36,
  },
  {
    name: "SmartSoft",
    logo: "/logos/smartsoft.png",
    games: 37,
  },
  {
    name: "100HP Gaming",
    logo: "/logos/100hp.png",
    games: 7,
  },
  {
    name: "BGaming",
    logo: "/logos/bgaming.png",
    games: 166,
  },
  {
    name: "Wazdan",
    logo: "/logos/wazdan.png",
    games: 109,
  },
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
