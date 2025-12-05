<template>
  <div>
    <h1 class="text-2xl font-bold text-ms-marine lg:text-3xl">Finishing up</h1>
    <p class="mt-2 text-ms-coolgray">
      Double-check everything looks OK before confirming.
    </p>

    <!-- Summary Card -->
    <div class="mt-6 rounded-lg bg-ms-magnolia p-4 lg:mt-8 lg:p-6">
      <!-- Selected Plan -->
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-medium text-ms-marine lg:font-bold">
            {{ selectedPlanDetails?.name }} ({{ billingLabel }})
          </h3>
          <button
            type="button"
            @click="goToStep(2)"
            class="text-sm text-ms-coolgray underline transition-colors hover:text-ms-purplish"
          >
            Change
          </button>
        </div>
        <span class="font-bold text-ms-marine">
          ${{ planPrice }}{{ priceLabel }}
        </span>
      </div>

      <!-- Divider -->
      <hr v-if="selectedAddOnsDetails.length > 0" class="my-4 border-ms-lightgray" />

      <!-- Add-ons -->
      <div class="space-y-3">
        <div
          v-for="addon in selectedAddOnsDetails"
          :key="addon.id"
          class="flex items-center justify-between"
        >
          <span class="text-sm text-ms-coolgray">{{ addon.name }}</span>
          <span class="text-sm text-ms-marine">
            +${{ formData.billingPeriod === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice }}{{ priceLabel }}
          </span>
        </div>
      </div>
    </div>

    <!-- Total -->
    <div class="mt-6 flex items-center justify-between px-4 lg:px-6">
      <span class="text-sm text-ms-coolgray">
        Total (per {{ formData.billingPeriod === 'monthly' ? 'month' : 'year' }})
      </span>
      <span class="text-lg font-bold text-ms-purplish lg:text-xl">
        +${{ totalPrice }}{{ priceLabel }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  formData,
  goToStep,
  selectedPlanDetails,
  selectedAddOnsDetails,
  planPrice,
  totalPrice,
  priceLabel,
  billingLabel,
} = useMultiStepForm()
</script>
