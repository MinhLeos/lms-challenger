<template>
  <div class="container">
    <ReceipeHeader :receipeHeader="receipeHeader" />
    <main class="main-container">
      <ReceipeInfoSection
        title="Preparation time"
        rootClass="p-5 rounded-lg bg-rose-50"
        titleClass="mb-2 text-xl text-rose-800 font-outfit font-semibold"
        itemMarkerClass="bg-rose-800"
        :receipeInfor="receipePreparation"
      />
      <ReceipeInfoSection title="Ingredients" :receipeInfor="receipeIngredients" />
      <hr />
      <ReceipeInfoSection
        title="Instructions"
        isListMarkerDecimal
        itemClass="items-start"
        :receipeInfor="receipeInstructions"
      />
      <hr />
      <ReceipeNutritionSection :receipeNutrition="receipeNutrition" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import {
  receipeHeader,
  receipePreparation,
  receipeIngredients,
  receipeInstructions,
  receipeNutrition,
} from "~/utils/receipe-constant";

definePageMeta({
  layout: "challenger-two",
});
</script>

<style lang="scss" scoped>
.container {
  @apply bg-white w-full h-full max-w-[768px] mx-auto sm:my-20 lg:my-32 sm:rounded-xl overflow-hidden p-0 sm:p-8 lg:p-12 xl:p-16;

  & .main-container {
    @apply flex flex-col gap-8 px-8 sm:px-0 pb-6 sm:pb-0;
  }
}
</style>
