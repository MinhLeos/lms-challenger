<template>
  <main>
    <div class="wrapper"><slot /></div>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
main {
  @apply flex items-center justify-center;
}

.wrapper {
  @apply bg-grey-900 flex justify-center items-center w-full h-full min-h-[100vh] font-inter;
}
</style>
