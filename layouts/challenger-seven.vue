<template>
  <div class="relative min-h-screen bg-ms-magnolia font-ubuntu lg:flex lg:items-center lg:justify-center lg:p-4">
    
    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <!-- Mobile Header with Background Image -->
      <div class="sticky top-0 w-full">
        <!-- Background Image - fixed height -->
        <img 
          :src="bgSidebarMobile" 
          alt="" 
          class="h-[172px] w-full object-cover object-top"
        />
        <!-- Step Buttons - positioned on top of image -->
        <div class="absolute inset-x-0 top-0 flex flex-row items-start justify-center gap-4 px-4 pt-8">
          <button
            v-for="step in STEPS"
            :key="step.number"
            type="button"
            @click="goToStep(step.number)"
            class="flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold transition-all"
            :class="[
              currentStep === step.number || (currentStep === 5 && step.number === 4)
                ? 'border-ms-lightblue bg-ms-lightblue text-ms-marine'
                : 'border-white bg-transparent text-white hover:border-ms-lightblue hover:text-ms-lightblue'
            ]"
          >
            {{ step.number }}
          </button>
        </div>
      </div>

      <!-- Mobile Content Card - uses negative margin to overlap header -->
      <section class="-mt-[72px] mx-4 mb-4 pb-20 relative z-10">
        <div class="bg-white rounded-[12px] p-6 shadow-lg">
          <slot />
        </div>
      </section>
      
      <!-- Mobile Navigation Buttons (Fixed Bottom) -->
      <div 
        v-if="currentStep < 5"
        class="fixed bottom-0 left-0 right-0 bg-white px-4 py-4 z-20"
      >
        <div class="flex items-center" :class="currentStep > 1 ? 'justify-between' : 'justify-end'">
          <button
            v-if="currentStep > 1"
            type="button"
            @click="prevStep"
            class="text-sm font-medium text-ms-coolgray transition-colors hover:text-ms-marine"
          >
            Go Back
          </button>
          <button
            type="button"
            @click="nextStep"
            class="rounded-md px-4 py-3 text-sm font-medium text-white transition-colors"
            :class="[
              currentStep === 4
                ? 'bg-ms-purplish hover:bg-ms-purplish/80'
                : 'bg-ms-marine hover:bg-ms-marine/90'
            ]"
          >
            {{ currentStep === 4 ? 'Confirm' : 'Next Step' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden lg:block mx-auto w-full max-w-[940px] rounded-2xl bg-white p-4 shadow-lg">
      <div class="flex gap-4">
        <!-- Desktop Sidebar -->
        <aside 
          class="relative overflow-hidden min-h-[568px] w-[274px] flex-shrink-0 rounded-xl p-8"
        >
          <!-- Background Image -->
          <img 
            :src="bgSidebarDesktop" 
            alt="" 
            class="absolute inset-0 h-full w-full object-cover"
          />
          
          <nav class="relative z-10 flex flex-col gap-6">
            <template v-for="step in STEPS" :key="step.number">
              <div
                role="button"
                tabindex="0"
                @click="goToStep(step.number)"
                @keydown.enter="goToStep(step.number)"
                @keydown.space="goToStep(step.number)"
                class="flex items-center gap-4 text-left cursor-pointer"
              >
                <span
                  class="flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold transition-all"
                  :class="[
                    currentStep === step.number || (currentStep === 5 && step.number === 4)
                      ? 'border-ms-lightblue bg-ms-lightblue text-ms-marine'
                      : 'border-white bg-transparent text-white hover:border-ms-lightblue hover:text-ms-lightblue'
                  ]"
                >
                  {{ step.number }}
                </span>
                <span class="flex flex-col">
                  <span class="text-xs text-ms-pastel">STEP {{ step.number }}</span>
                  <span class="text-sm font-bold uppercase tracking-wider text-white">
                    {{ step.shortTitle }}
                  </span>
                </span>
              </div>
            </template>
          </nav>
        </aside>

        <!-- Desktop Content Area -->
        <main class="flex-1 flex flex-col">
          <div class="hidden lg:block flex-1 px-12 py-10">
            <slot />
          </div>

          <!-- Desktop Navigation Buttons -->
          <div 
            v-if="currentStep < 5"
            class="px-12 hidden lg:block"
          >
            <div class="flex items-center" :class="currentStep > 1 ? 'justify-between' : 'justify-end'">
              <button
                v-if="currentStep > 1"
                type="button"
                @click="prevStep"
                class="text-sm font-medium text-ms-coolgray transition-colors hover:text-ms-marine"
              >
                Go Back
              </button>
              <button
                type="button"
                @click="nextStep"
                class="rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
                :class="[
                  currentStep === 4
                    ? 'bg-ms-purplish hover:bg-ms-purplish/80'
                    : 'bg-ms-marine hover:bg-ms-marine/90'
                ]"
              >
                {{ currentStep === 4 ? 'Confirm' : 'Next Step' }}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { STEPS } from '~/utils/multistep-constants'
import bgSidebarDesktop from '~/assets/images/challenger-seven/bg-sidebar-desktop.svg'
import bgSidebarMobile from '~/assets/images/challenger-seven/bg-sidebar-mobile.svg'

const { currentStep, nextStep, prevStep, goToStep } = useMultiStepForm()
</script>
