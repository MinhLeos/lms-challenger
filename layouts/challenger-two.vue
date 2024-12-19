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
  @apply bg-stone-100 flex justify-center items-start w-full h-full min-h-[100vh];
}
</style>
