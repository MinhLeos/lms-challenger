<template>
  <Header />
  <div class="p-4 w-full flex items-center justify-center min-h-[288px]">
    <SwiperSlider />
  </div>
  <main>
    <NavigationMenu />
    <ProvidersCarousel />
    <ExclusiveGames />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "slider",
});
</script>
