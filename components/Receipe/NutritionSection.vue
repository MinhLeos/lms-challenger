<template>
  <section class="nutrition-container">
    <h3 class="nutrition-title">Nutrition</h3>
    <p class="nutrition-description">{{ receipeNutrition?.description }}</p>
    <div v-if="receipeNutrition?.nutrition?.length" class="nutrition-content">
      <table class="nutrition-table">
        <tbody>
          <tr v-for="(item, index) in receipeNutrition.nutrition" :key="index" class="nutrition-item">
            <td>{{ item.nutritional ?? "" }}</td>
            <td>{{ item.value ?? "" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ReceipeNutritionType } from "~/types/Receipe";

const props = defineProps<{
  receipeNutrition?: ReceipeNutritionType;
}>();
</script>

<style lang="scss" scoped>
.nutrition-title {
  @apply text-2xl font-young mb-4 text-brown-800;
}
.nutrition-table {
  @apply w-full mt-2;

  & .nutrition-item {
    @apply border-b border-gray-300/30;

    & td {
      @apply py-3;
    }
    & td:first-child {
      @apply px-7 w-1/2;
    }
    & td:last-child {
      @apply font-semibold text-brown-800;
    }
  }
  & .nutrition-item:last-child {
    @apply border-b-0;
  }
}
</style>
