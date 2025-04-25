<template>
  <div class="bg-[#031634] py-4 px-4">
    <!-- Desktop -->
    <div class="hidden lg:flex gap-3 justify-center">
      <MenuButton icon="💎" text="Diamond mine" />
      <MenuButton icon="🪙" text="VIP" />
      <MenuButton icon="🎁" text="Promotion" />
      <MenuButton icon="⚽" text="Hot Match" />
      <MenuButton icon="💸" text="P2P Transaction" />
      <MenuButton icon="🎮" text="Games" />
      <MenuButton icon="⚙️" text="Providers" />
    </div>

    <!-- Mobile -->
    <div class="flex lg:hidden gap-4 justify-center px-4 overflow-hidden">
      <MenuButton icon="🔍" text="Search" />
      <MenuButton icon="🎮" text="Games" />
      <MenuButton icon="⚙️" text="Providers" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
