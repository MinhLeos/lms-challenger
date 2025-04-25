<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  icon: string;
  text: string;
}>();
</script>

<template>
  <button
    class="bg-[#0f264b] text-white px-4 py-3 rounded-xl flex items-center gap-2 text-sm hover:bg-[#1c3a5c] transition h-[60px] w-[200px]"
  >
    <span class="text-lg">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>
