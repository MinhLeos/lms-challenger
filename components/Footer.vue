<template>
  <footer class="bg-[#0d2344] text-white px-4 py-8">
    <!-- Desktop Layout -->
    <div class="hidden lg:grid grid-cols-5 gap-8 max-w-[1440px] mx-auto">
      <!-- Help Center -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Help Center</h2>
        <p class="text-sm text-gray-400">If you have any questions?</p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded">
          GET ANSWERS
        </button>
        <div class="flex gap-4 pt-4">
          <img src="/icons/telegram.svg" alt="Telegram" class="w-5 h-5" />
          <img src="/icons/facebook.svg" alt="Facebook" class="w-5 h-5" />
          <img src="/icons/instagram.svg" alt="Instagram" class="w-5 h-5" />
          <img src="/icons/twitter.svg" alt="Twitter" class="w-5 h-5" />
        </div>
      </div>

      <!-- Games -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold">Games</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li>Game 1</li>
          <li>Game 2</li>
          <li>Game 3</li>
          <li>Game 14</li>
        </ul>
      </div>

      <!-- About -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold">About</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li>About Us</li>
          <li>Promotions</li>
          <li>VIP</li>
          <li>Help Center</li>
          <li>Awards & Certificates</li>
          <li>App</li>
        </ul>
      </div>

      <!-- Legal Information -->
      <div class="space-y-2">
        <h3 class="text-sm font-semibold">Legal Information</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li>General Terms & Conditions</li>
          <li>Responsible Gaming Policy</li>
          <li>Sports Betting Rules</li>
          <li>Privacy and Cookies Policy</li>
          <li>Payment Methods</li>
          <li>Limits</li>
        </ul>
      </div>

      <!-- App Download -->
      <div class="flex flex-col gap-4 justify-center items-center">
        <div class="flex gap-4">
          <button class="bg-gray-700 p-2 rounded-lg flex items-center gap-2">
            <img src="/icons/apple.svg" alt="Mac" class="w-6 h-6" />
            <span class="text-xs">Bluechip App for Mac OS</span>
          </button>
        </div>
        <div class="flex gap-4">
          <button class="bg-gray-700 p-2 rounded-lg flex items-center gap-2">
            <img src="/icons/android.svg" alt="Android" class="w-6 h-6" />
            <span class="text-xs">Android</span>
          </button>
          <button class="bg-gray-700 p-2 rounded-lg flex items-center gap-2">
            <img src="/icons/apple.svg" alt="iOS" class="w-6 h-6" />
            <span class="text-xs">iOS</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="block lg:hidden max-w-md mx-auto">
      <!-- Accordions -->
      <div v-for="(section, idx) in mobileSections" :key="idx" class="mb-4">
        <button
          @click="toggleSection(idx)"
          class="w-full bg-[#18335f] flex justify-between items-center p-4 rounded text-white font-semibold"
        >
          {{ section.title }}
          <span>{{ openSection === idx ? "▲" : "▼" }}</span>
        </button>
        <div v-if="openSection === idx" class="bg-[#0d2344] px-4 py-2 text-gray-400 text-sm space-y-2">
          <ul>
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center gap-6 my-6">
        <img src="/icons/telegram.svg" alt="Telegram" class="w-6 h-6" />
        <img src="/icons/facebook.svg" alt="Facebook" class="w-6 h-6" />
        <img src="/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
        <img src="/icons/twitter.svg" alt="Twitter" class="w-6 h-6" />
      </div>

      <!-- Help Center & Apps -->
      <div class="space-y-4">
        <!-- Help Center block: responsive layout -->
        <div class="bg-[#18335f] p-4 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 class="text-sm font-semibold">Help Center</h2>
            <p class="text-xs text-gray-400 mt-1">If you have any questions?</p>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded mt-2 sm:mt-0">
            GET ANSWERS
          </button>
        </div>

        <!-- App download buttons -->
        <div class="flex gap-4">
          <button class="flex-1 bg-gray-700 p-2 rounded-lg flex flex-col items-center text-center">
            <img src="/icons/android.svg" alt="Android" class="w-6 h-6 mb-1" />
            <span class="text-xs">Bluechip App for Android</span>
          </button>
          <button class="flex-1 bg-gray-700 p-2 rounded-lg flex flex-col items-center text-center">
            <img src="/icons/apple.svg" alt="iOS" class="w-6 h-6 mb-1" />
            <span class="text-xs">Bluechip App for iOS</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const openSection = ref(null);

const toggleSection = (index) => {
  openSection.value = openSection.value === index ? null : index;
};

const mobileSections = [
  {
    title: "Games",
    items: ["Game 1", "Game 2", "Game 3", "Game 14"],
  },
  {
    title: "About",
    items: ["About Us", "Promotions", "VIP", "Help Center", "Awards & Certificates", "App"],
  },
  {
    title: "Legal Information",
    items: [
      "General Terms & Conditions",
      "Responsible Gaming Policy",
      "Sports Betting Rules",
      "Privacy and Cookies Policy",
      "Payment Methods",
      "Limits",
    ],
  },
];
</script>
