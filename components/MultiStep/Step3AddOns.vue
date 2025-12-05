<template>
  <div>
    <h1 class="text-2xl font-bold text-ms-marine lg:text-3xl">Pick add-ons</h1>
    <p class="mt-2 text-ms-coolgray">
      Add-ons help enhance your gaming experience.
    </p>

    <!-- Add-on Options -->
    <div class="mt-6 space-y-3 lg:mt-8 lg:space-y-4">
      <button
        v-for="addon in ADD_ONS"
        :key="addon.id"
        type="button"
        @click="toggleAddOn(addon.id)"
        class="flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all lg:gap-6 lg:px-6"
        :class="[
          formData.addOns.includes(addon.id)
            ? 'border-ms-purplish bg-ms-magnolia'
            : 'border-ms-lightgray hover:border-ms-purplish'
        ]"
      >
        <!-- Checkbox -->
        <div
          class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors"
          :class="[
            formData.addOns.includes(addon.id)
              ? 'border-ms-purplish bg-ms-purplish'
              : 'border-ms-lightgray'
          ]"
        >
          <svg
            v-if="formData.addOns.includes(addon.id)"
            class="h-3 w-3 text-white"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4L4.43298 7.43298L10.866 1"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </div>

        <!-- Content -->
        <div class="flex-1">
          <h3 class="font-medium text-ms-marine lg:font-bold">{{ addon.name }}</h3>
          <p class="text-xs text-ms-coolgray lg:text-sm">{{ addon.description }}</p>
        </div>

        <!-- Price -->
        <span class="text-xs font-medium text-ms-purplish lg:text-sm">
          +${{ formData.billingPeriod === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice }}/{{ formData.billingPeriod === 'monthly' ? 'mo' : 'yr' }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ADD_ONS } from '~/utils/multistep-constants'

const { formData, toggleAddOn } = useMultiStepForm()
</script>
