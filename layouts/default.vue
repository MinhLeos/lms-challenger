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
  @apply bg-gray flex justify-center items-center w-full max-w-[1440px] h-screen;
}
</style>
