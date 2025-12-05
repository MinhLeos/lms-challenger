<template>
  <div>
    <h1 class="text-2xl font-bold text-ms-marine lg:text-3xl">Select your plan</h1>
    <p class="mt-2 text-ms-coolgray">
      You have the option of monthly or yearly billing.
    </p>

    <!-- Plan Error -->
    <p v-if="errors.plan" class="mt-4 text-sm font-semibold text-ms-strawberry">
      {{ errors.plan }}
    </p>

    <!-- Plan Cards -->
    <div class="mt-6 grid gap-3 lg:mt-8 lg:grid-cols-3 lg:gap-4">
      <button
        v-for="plan in PLANS"
        :key="plan.id"
        type="button"
        @click="selectPlan(plan.id)"
        class="flex items-start gap-4 rounded-lg border p-4 text-left transition-all lg:flex-col lg:gap-10 lg:p-5"
        :class="[
          formData.selectedPlan === plan.id
            ? 'border-ms-purplish bg-ms-magnolia'
            : 'border-ms-lightgray hover:border-ms-purplish'
        ]"
      >
        <img :src="plan.icon" :alt="plan.name" class="h-10 w-10" />
        <div>
          <h3 class="font-bold text-ms-marine">{{ plan.name }}</h3>
          <p class="text-sm text-ms-coolgray">
            ${{ formData.billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice }}/{{ formData.billingPeriod === 'monthly' ? 'mo' : 'yr' }}
          </p>
          <p
            v-if="formData.billingPeriod === 'yearly'"
            class="mt-1 text-xs font-medium text-ms-marine"
          >
            2 months free
          </p>
        </div>
      </button>
    </div>

    <!-- Billing Toggle -->
    <div class="mt-6 flex items-center justify-center gap-6 rounded-lg bg-ms-magnolia py-4 lg:mt-8">
      <span
        class="text-sm font-medium transition-colors"
        :class="formData.billingPeriod === 'monthly' ? 'text-ms-marine' : 'text-ms-coolgray'"
      >
        Monthly
      </span>
      
      <button
        type="button"
        @click="toggleBillingPeriod"
        class="relative h-5 w-10 rounded-full bg-ms-marine transition-colors"
        role="switch"
        :aria-checked="formData.billingPeriod === 'yearly'"
      >
        <span
          class="absolute top-1 h-3 w-3 rounded-full bg-white transition-all"
          :class="formData.billingPeriod === 'monthly' ? 'left-1' : 'left-6'"
        />
      </button>
      
      <span
        class="text-sm font-medium transition-colors"
        :class="formData.billingPeriod === 'yearly' ? 'text-ms-marine' : 'text-ms-coolgray'"
      >
        Yearly
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PLANS } from '~/utils/multistep-constants'

const { formData, errors, selectPlan, toggleBillingPeriod } = useMultiStepForm()
</script>
