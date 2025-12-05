<template>
  <div>
    <!-- Step 1: Personal Info -->
    <Step1PersonalInfo v-if="currentStep === 1" />

    <!-- Step 2: Select Plan -->
    <Step2SelectPlan v-else-if="currentStep === 2" />

    <!-- Step 3: Add-ons -->
    <Step3AddOns v-else-if="currentStep === 3" />

    <!-- Step 4: Summary -->
    <Step4Summary v-else-if="currentStep === 4" />

    <!-- Step 5: Thank You -->
    <Step5ThankYou v-else-if="currentStep === 5" />
  </div>
</template>

<script setup lang="ts">
import Step1PersonalInfo from '~/components/MultiStep/Step1PersonalInfo.vue'
import Step2SelectPlan from '~/components/MultiStep/Step2SelectPlan.vue'
import Step3AddOns from '~/components/MultiStep/Step3AddOns.vue'
import Step4Summary from '~/components/MultiStep/Step4Summary.vue'
import Step5ThankYou from '~/components/MultiStep/Step5ThankYou.vue'

definePageMeta({
  layout: 'challenger-seven',
})

const { currentStep } = useMultiStepForm()
</script>
