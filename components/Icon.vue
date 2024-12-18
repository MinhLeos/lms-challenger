<template>
  <component
    :is="Icon"
    :color="color"
    :width="width"
    :height="height"
    :aria-label="props?.ariaLabel"
    :class="props?.class"
  />
</template>

<script setup>
import { computed } from "vue";
import Icons from "./Icons/index.vue";

const props = defineProps({
  type: String,
  color: String,
  width: String,
  height: String,
  ariaLabel: String,
  class: String,
});

const Icon = computed(() => Icons[props.type]);
</script>
