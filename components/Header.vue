<template>
  <header class="bg-[#021633] text-white px-4 py-2 flex items-center justify-center">
    <div class="flex items-center justify-start w-full max-w-[1440px] space-x-3 lg:space-x-6">
      <div class="flex items-center">
        <button class="focus:outline-none">
          <img src="/icons/hambuger.svg" alt="Menu" class="w-6 h-6 lg:w-7 lg:h-7" />
        </button>
        <img src="/logo.png" alt="Logo" class="h-5 lg:h-7.5" />
      </div>

      <button class="hidden md:block">
        <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 015.29 13.71l4 4a1 1 0 01-1.42 1.42l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
        </svg>
      </button>
      <nav class="hidden md:flex space-x-3 lg:space-x-6 text-sm tracking-widest">
        <a href="#" class="hover:text-gray-300">HOME</a>
        <a href="#" class="hover:text-gray-300">GAME</a>
        <a href="#" class="hover:text-gray-300">INFOR</a>
        <a href="#" class="hover:text-gray-300">NEWS</a>
        <a href="#" class="hover:text-gray-300">PROMOTIONS</a>
        <a href="#" class="hover:text-gray-300">VIP</a>
      </nav>

      <div class="flex items-center space-x-3 !ml-auto">
        <button class="bg-[#0e224d] px-4 py-1 rounded-xl text-sm tracking-widest">LOGIN</button>
        <button class="bg-[#00c476] px-4 py-1 rounded-xl text-sm tracking-widest text-white">REGISTRATION</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
