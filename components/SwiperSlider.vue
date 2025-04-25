<template>
  <ClientOnly>
    <Swiper
      :modules="[Autoplay]"
      :autoplay="autoplay"
      :loop="true"
      :centered-slides="true"
      :slides-per-view="3"
      :breakpoints="breakpoints"
      class="h-64 w-full"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(bg, index) in backgrounds" :key="index" class="transition-all duration-500 ease-in-out">
        <div :class="['h-full w-full rounded-xl', bg]">
          <p>Header</p>
          <p>Main</p>
          <p>Footer</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";

const swiperRef = ref(null);
const autoplay = {
  delay: 300000,
  disableOnInteraction: false,
};

const breakpoints = {
  0: {
    slidesPerView: 1,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 3,
    centeredSlides: true,
  },
};

const backgrounds = [
  "bg-gradient-to-r from-red-400 to-yellow-300",
  "bg-gradient-to-r from-green-400 to-blue-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-indigo-400 to-cyan-400",
  "bg-gradient-to-r from-orange-300 to-red-500",
];

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

onMounted(async () => {
  await nextTick();
  const swiper = swiperRef.value;
  swiper?.autoplay?.stop?.();
  setTimeout(() => {
    swiper?.autoplay?.start?.();
  }, 3000);
});
</script>

<style scoped>
.swiper-slide {
  opacity: 0.5;
  transform: scale(0.85);
  transition: all 0.3s ease;
  max-width: 100%;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}

.swiper {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
