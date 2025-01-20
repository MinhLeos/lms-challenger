<template>
  <section class="section-container">
    <Image
      className="w-28 h-28 rounded-full"
      altText="Avatar"
      src="https://mgisolutions-coffee.imgix.net/special-coffee/avatar-jessica.jpeg"
      :width="240"
      :height="240"
    />
    <h2 class="text-3xl font-semibold mt-8">Jessica Randall</h2>
    <p class="text-green mt-2 font-medium">London, United Kingdom</p>
    <p class="mt-6">"Front-end developer and avid reader."</p>
    <ul v-if="socialList?.length" class="flex flex-col justify-center items-center mt-7 gap-5 w-full list-none">
      <li class="w-full" v-for="item in socialList">
        <button
          class="w-full text-white bg-grey-700 rounded-lg flex items-center justify-center px-2 py-4 font-semibold hover:bg-green hover:text-grey-900 active:bg-green active:text-grey-900"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  socialList?: string[];
}>();
</script>

<style lang="scss" scoped>
.section-container {
  @apply w-[360px] sm:w-[400px] bg-grey-800 rounded-lg p-6 sm:p-8 flex flex-col items-center text-white;

  p {
    word-break: break-all;
  }
}
</style>
