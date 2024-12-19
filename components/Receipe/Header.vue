<template>
  <header class="header-container">
    <Image
      :width="910"
      :height="512"
      className="sm:rounded-xl"
      :src="receipeHeader.imageUrl"
      :altText="receipeHeader.imageAltText"
    />
    <h2 class="header-title">{{ receipeHeader.title }}</h2>
    <p class="header-description">{{ receipeHeader.description }}</p>
  </header>
</template>

<script lang="ts" setup>
import type { ReceipeHeaderType } from "~/types/Receipe";

const props = defineProps<{
  receipeHeader: ReceipeHeaderType;
}>();
</script>

<style lang="css" scoped>
.header-container {
  @apply mb-8;
}

.header-title {
  @apply text-3xl font-medium font-young mt-8 mb-6 px-8 sm:px-0;
}

.header-description {
  @apply text-base px-8 sm:px-0;
}
</style>
