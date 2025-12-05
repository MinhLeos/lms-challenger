// Types for Multi-step Form (Challenger Seven)

export interface PersonalInfo {
  name: string
  email: string
  phone: string
}

export type PlanId = 'arcade' | 'advanced' | 'pro'
export type BillingPeriod = 'monthly' | 'yearly'
export type AddOnId = 'online-service' | 'larger-storage' | 'customizable-profile'

export interface Plan {
  id: PlanId
  name: string
  monthlyPrice: number
  yearlyPrice: number
  icon: string
}

export interface AddOn {
  id: AddOnId
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

export interface FormData {
  personalInfo: PersonalInfo
  selectedPlan: PlanId | null
  billingPeriod: BillingPeriod
  addOns: AddOnId[]
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  plan?: string
}

export interface Step {
  number: number
  title: string
  shortTitle: string
}
