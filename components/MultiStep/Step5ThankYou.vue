<template>
  <div class="flex min-h-[400px] flex-col items-center justify-center text-center lg:min-h-[450px]">
    <!-- Thank You Icon -->
    <img
      :src="iconThankYou"
      alt="Thank you"
      class="h-14 w-14 lg:h-20 lg:w-20"
    />

    <!-- Title -->
    <h1 class="mt-6 text-2xl font-bold text-ms-marine lg:mt-8 lg:text-3xl">
      Thank you!
    </h1>

    <!-- Description -->
    <p class="mt-3 max-w-md text-ms-coolgray lg:mt-4">
      Thanks for confirming your subscription! We hope you have fun using our platform. 
      If you ever need support, please feel free to email us at support@loremgaming.com.
    </p>
  </div>
</template>

<script setup lang="ts">
import iconThankYou from '~/assets/images/challenger-seven/icon-thank-you.svg'
</script>
