<template>
  <section
    class="flex flex-col items-start justify-start bg-white rounded-lg p-5 shadow-custom w-[320px] sm:w-[400px] border border-solid border-black"
  >
    <img class="rounded-lg w-full h-auto" :alt="blogReview.bannerAltText" :src="blogReview.bannerUrl" />
    <p class="mt-5 py-1.5 px-3.5 bg-yellow font-bold rounded">{{ blogReview.badge }}</p>
    <p class="mt-4">{{ blogReview.timePublished }}</p>
    <h2 class="mt-4">
      <a class="text-xl sm:text-2xl font-extrabold hover:text-yellow active:text-yellow" href="#!">{{
        blogReview.title
      }}</a>
    </h2>
    <p class="text-gray-500 mt-4">
      {{ blogReview.description }}
    </p>
    <div class="flex items-center justify-start gap-3 mt-5">
      <img :width="40" :height="40" :alt="blogReview.creatorName" class="w-10 h-10" :src="blogReview.creatorAvatar" />
      <p class="font-bold">{{ blogReview.creatorName }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { BlogReviewType } from "~/types/BlogReview";

defineProps<{
  blogReview: BlogReviewType;
}>();
</script>
