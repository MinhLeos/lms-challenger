// Composable for Multi-step Form (Challenger Seven)

import type { FormData, FormErrors, PlanId, AddOnId, BillingPeriod } from '~/types/MultiStepForm'
import { PLANS, ADD_ONS, INITIAL_FORM_DATA } from '~/utils/multistep-constants'

export const useMultiStepForm = () => {
  // State
  const currentStep = useState<number>('ms-current-step', () => 1)
  const formData = useState<FormData>('ms-form-data', () => ({ ...INITIAL_FORM_DATA }))
  const errors = useState<FormErrors>('ms-errors', () => ({}))
  const isCompleted = useState<boolean>('ms-completed', () => false)

  // Validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.value.personalInfo.name.trim()) {
      newErrors.name = 'This field is required'
    }
    
    if (!formData.value.personalInfo.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (!validateEmail(formData.value.personalInfo.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formData.value.personalInfo.phone.trim()) {
      newErrors.phone = 'This field is required'
    }
    
    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.value.selectedPlan) {
      newErrors.plan = 'Please select a plan'
    }
    
    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  const validateCurrentStep = (): boolean => {
    switch (currentStep.value) {
      case 1:
        return validateStep1()
      case 2:
        return validateStep2()
      default:
        return true
    }
  }

  // Navigation
  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep.value < 4) {
        currentStep.value++
        errors.value = {}
      } else if (currentStep.value === 4) {
        isCompleted.value = true
        currentStep.value = 5
      }
    }
  }

  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
      errors.value = {}
    }
  }

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4 && !isCompleted.value) {
      currentStep.value = step
      errors.value = {}
    }
  }

  // Form Actions
  const updatePersonalInfo = (field: keyof FormData['personalInfo'], value: string) => {
    formData.value.personalInfo[field] = value
    // Clear error when user starts typing
    if (errors.value[field]) {
      errors.value[field] = undefined
    }
  }

  const selectPlan = (planId: PlanId) => {
    formData.value.selectedPlan = planId
    if (errors.value.plan) {
      errors.value.plan = undefined
    }
  }

  const toggleBillingPeriod = () => {
    formData.value.billingPeriod = formData.value.billingPeriod === 'monthly' ? 'yearly' : 'monthly'
  }

  const setBillingPeriod = (period: BillingPeriod) => {
    formData.value.billingPeriod = period
  }

  const toggleAddOn = (addOnId: AddOnId) => {
    const index = formData.value.addOns.indexOf(addOnId)
    if (index === -1) {
      formData.value.addOns.push(addOnId)
    } else {
      formData.value.addOns.splice(index, 1)
    }
  }

  // Computed values
  const selectedPlanDetails = computed(() => {
    return PLANS.find(plan => plan.id === formData.value.selectedPlan)
  })

  const selectedAddOnsDetails = computed(() => {
    return ADD_ONS.filter(addon => formData.value.addOns.includes(addon.id))
  })

  const planPrice = computed(() => {
    if (!selectedPlanDetails.value) return 0
    return formData.value.billingPeriod === 'monthly'
      ? selectedPlanDetails.value.monthlyPrice
      : selectedPlanDetails.value.yearlyPrice
  })

  const addOnsTotal = computed(() => {
    return selectedAddOnsDetails.value.reduce((total, addon) => {
      const price = formData.value.billingPeriod === 'monthly'
        ? addon.monthlyPrice
        : addon.yearlyPrice
      return total + price
    }, 0)
  })

  const totalPrice = computed(() => {
    return planPrice.value + addOnsTotal.value
  })

  const priceLabel = computed(() => {
    return formData.value.billingPeriod === 'monthly' ? '/mo' : '/yr'
  })

  const billingLabel = computed(() => {
    return formData.value.billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'
  })

  // Reset form
  const resetForm = () => {
    currentStep.value = 1
    formData.value = { ...INITIAL_FORM_DATA, addOns: [] }
    errors.value = {}
    isCompleted.value = false
  }

  return {
    // State
    currentStep,
    formData,
    errors,
    isCompleted,
    
    // Navigation
    nextStep,
    prevStep,
    goToStep,
    
    // Actions
    updatePersonalInfo,
    selectPlan,
    toggleBillingPeriod,
    setBillingPeriod,
    toggleAddOn,
    resetForm,
    
    // Computed
    selectedPlanDetails,
    selectedAddOnsDetails,
    planPrice,
    addOnsTotal,
    totalPrice,
    priceLabel,
    billingLabel,
  }
}
