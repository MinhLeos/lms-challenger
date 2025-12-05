// Constants for Multi-step Form (Challenger Seven)

import type { Plan, AddOn, Step, AddOnId } from '~/types/MultiStepForm'
import iconArcade from '~/assets/images/challenger-seven/icon-arcade.svg'
import iconAdvanced from '~/assets/images/challenger-seven/icon-advanced.svg'
import iconPro from '~/assets/images/challenger-seven/icon-pro.svg'

export const STEPS: Step[] = [
  { number: 1, title: 'Your info', shortTitle: 'YOUR INFO' },
  { number: 2, title: 'Select plan', shortTitle: 'SELECT PLAN' },
  { number: 3, title: 'Add-ons', shortTitle: 'ADD-ONS' },
  { number: 4, title: 'Summary', shortTitle: 'SUMMARY' },
]

export const PLANS: Plan[] = [
  {
    id: 'arcade',
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: iconArcade,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: iconAdvanced,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: iconPro,
  },
]

export const ADD_ONS: AddOn[] = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 'customizable-profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
]

export const INITIAL_FORM_DATA = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  selectedPlan: null as null,
  billingPeriod: 'monthly' as const,
  addOns: [] as AddOnId[],
}
