<template>
  <main>
    <div class="wrapper">
      <Image
        className="h-[232px] sm:h-auto sm:min-h-[320px]"
        src="https://mgisolutions-coffee.imgix.net/special-coffee/background-pattern-desktop.svg"
      />
      <slot />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
main {
  @apply flex items-center justify-center;
}

.wrapper {
  @apply bg-pink-light relative w-full h-full min-h-[100vh] font-figtree text-base overflow-auto;
}
</style>
