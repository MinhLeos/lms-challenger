<template>
  <img
    v-if="props.src"
    :src="src"
    :srcset="srcset"
    :alt="props.altText"
    :sizes="sizes"
    :class="computedClass"
    :width="props.width"
    :height="props.height"
  />
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
const props = defineProps<{
  src?: string;
  altText?: string;
  className?: string;
  width?: number;
  height?: number;
}>();
const sizes = "(max-width: 480px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 960px, 1440px";
const src = computed(() => `${props.src}?width=320&fit=crop&auto=compress,format 320w`);
const srcset = computed(
  () => `
        ${props.src}?width=320&fit=crop&auto=compress,format 320w,
        ${props.src}?width=640&fit=crop&auto=compress,format 640w,
        ${props.src}?width=960&fit=crop&auto=compress,format 960w,
        ${props.src}?width=1440&fit=crop&auto=compress,format 1440w
      `
);
const computedClass = computed(() => {
  return twMerge(["w-full h-auto", props.className]);
});
</script>
