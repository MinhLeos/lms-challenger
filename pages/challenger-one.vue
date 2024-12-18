<template>
  <section class="section-container">
    <div class="qr-container">
      <div class="qr-oval qr-oval-one"></div>
      <div class="qr-oval qr-oval-two"></div>
      <Icon class="qr-image" type="iconQR" width="160px" height="160px" />
    </div>
    <article class="paragraph-container">
      <h2 class="paragraph-title">Improve your front-end skills by building projects</h2>
      <p class="paragraph-content">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.section-container {
  @apply p-4 w-80 max-w-full h-[499px] bg-white shadow-[0px_25px_25px_0px_#0000000c] rounded-[20px];
}
.qr-container {
  @apply relative w-72 h-72 bg-primary overflow-hidden rounded-[10px];
}
.qr-oval {
  @apply absolute bg-primary-300 rounded-full;

  &.qr-oval-one {
    @apply w-[328px] h-[328px] top-[-164.5px] left-[-131.5px];
  }
  &.qr-oval-two {
    @apply w-[270px] h-[270px] top-[204.5px] left-[131.5px];
  }
}
.qr-image {
  @apply absolute top-16 left-16;
}
.paragraph-container {
  @apply mt-6 py-0 px-4 text-center;
}
.paragraph-title {
  @apply font-outfit text-[22px] font-bold leading-[26.4px] text-center text-gray-700 mb-4;
}
.paragraph-content {
  @apply font-outfit text-[15px] font-normal leading-[21px] tracking-[0.2px] text-center text-gray-300;
}
</style>
