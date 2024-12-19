<template>
  <section :class="computedRootClass">
    <h3 :class="computedTitleClass">{{ props.title }}</h3>
    <ul v-if="props.receipeInfor?.length" :class="computedListClass">
      <li v-for="(item, index) in props.receipeInfor" :key="item.title" :class="computedItemClass">
        <p v-if="props.isListMarkerDecimal" class="text-brown-800 font-semibold">{{ index + 1 }}.</p>
        <div v-else :class="computedItemMarkerClass"></div>
        <p>
          <span v-if="item.title" class="font-semibold shrink-0 mr-1">{{ item.title }}:</span>
          <span class="">{{ item.description }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import type { ReceipeDataItem } from "~/types/Receipe";

const props = defineProps<{
  title?: string;
  receipeInfor: ReceipeDataItem[];
  rootClass?: string;
  titleClass?: string;
  listClass?: string;
  itemClass?: string;
  itemMarkerClass?: string;
  isListMarkerDecimal?: boolean;
}>();

const computedRootClass = computed(() => {
  return twMerge(["", props.rootClass]);
});

const computedTitleClass = computed(() => {
  return twMerge(["font-young text-2xl mb-4 text-brown-800", props.titleClass]);
});

const computedListClass = computed(() => {
  return twMerge(["flex flex-col gap-1 pl-2", props.listClass]);
});

const computedItemClass = computed(() => {
  return twMerge(["flex items-center justify-start gap-6", props.itemClass]);
});

const computedItemMarkerClass = computed(() => {
  return twMerge(["w-1.5 h-1.5 rounded-full shrink-0 bg-brown-800", props.itemMarkerClass]);
});
</script>

<style lang="scss" scoped></style>
