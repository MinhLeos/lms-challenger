<template>
  <div>
    <h1 class="text-2xl font-bold text-ms-marine lg:text-3xl">Personal info</h1>
    <p class="mt-2 text-ms-coolgray">
      Please provide your name, email address, and phone number.
    </p>

    <form class="mt-6 space-y-4 lg:mt-8 lg:space-y-6" @submit.prevent>
      <!-- Name Field -->
      <div>
        <div class="flex items-center justify-between">
          <label for="ms-name" class="text-sm font-medium text-ms-marine">Name</label>
          <span v-if="errors.name" class="text-sm font-semibold text-ms-strawberry">
            {{ errors.name }}
          </span>
        </div>
        <input
          id="ms-name"
          type="text"
          placeholder="e.g. Stephen King"
          :value="formData.personalInfo.name"
          @input="updatePersonalInfo('name', ($event.target as HTMLInputElement).value)"
          class="mt-1 w-full rounded-lg border px-4 py-3 text-ms-marine placeholder-ms-coolgray outline-none transition-colors focus:border-ms-purplish"
          :class="[
            errors.name 
              ? 'border-ms-strawberry' 
              : 'border-ms-lightgray hover:border-ms-purplish'
          ]"
        />
      </div>

      <!-- Email Field -->
      <div>
        <div class="flex items-center justify-between">
          <label for="ms-email" class="text-sm font-medium text-ms-marine">Email Address</label>
          <span v-if="errors.email" class="text-sm font-semibold text-ms-strawberry">
            {{ errors.email }}
          </span>
        </div>
        <input
          id="ms-email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          :value="formData.personalInfo.email"
          @input="updatePersonalInfo('email', ($event.target as HTMLInputElement).value)"
          class="mt-1 w-full rounded-lg border px-4 py-3 text-ms-marine placeholder-ms-coolgray outline-none transition-colors focus:border-ms-purplish"
          :class="[
            errors.email 
              ? 'border-ms-strawberry' 
              : 'border-ms-lightgray hover:border-ms-purplish'
          ]"
        />
      </div>

      <!-- Phone Field -->
      <div>
        <div class="flex items-center justify-between">
          <label for="ms-phone" class="text-sm font-medium text-ms-marine">Phone Number</label>
          <span v-if="errors.phone" class="text-sm font-semibold text-ms-strawberry">
            {{ errors.phone }}
          </span>
        </div>
        <input
          id="ms-phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          :value="formData.personalInfo.phone"
          @input="updatePersonalInfo('phone', ($event.target as HTMLInputElement).value)"
          class="mt-1 w-full rounded-lg border px-4 py-3 text-ms-marine placeholder-ms-coolgray outline-none transition-colors focus:border-ms-purplish"
          :class="[
            errors.phone 
              ? 'border-ms-strawberry' 
              : 'border-ms-lightgray hover:border-ms-purplish'
          ]"
        />
      </div>
      
      <!-- Hidden submit button for accessibility -->
      <button type="submit" class="sr-only">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { formData, errors, updatePersonalInfo } = useMultiStepForm()
</script>
