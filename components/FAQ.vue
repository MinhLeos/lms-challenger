<template>
  <section
    class="bg-white p-7 flex flex-col items-start justify-center w-[340px] sm:w-[550px] absolute top-36 sm:top-52 2xl:top-80 left-1/2 -translate-x-1/2 rounded-xl"
  >
    <div class="flex items-center justify-center gap-4">
      <Icon width="36px" height="36px" type="iconStart" />
      <h2 class="text-3xl font-extrabold">FAQs</h2>
    </div>
    <div class="w-full mt-3">
      <details v-for="(faq, index) in faqData" :key="index" class="faq-item" @toggle="handleToggle" :open="index === 0">
        <summary class="list-none cursor-pointer py-5 active:text-purple summary-container">
          <div class="flex items-center justify-between gap-5">
            <p class="text-lg leading-5 font-bold">{{ faq.question }}</p>
            <Icon class="close" width="28px" height="28px" type="iconPlus" />
            <Icon class="open" width="28px" height="28px" type="iconMinus" />
          </div>
        </summary>
        <div class="answer text-purple-grayish pb-5">{{ faq.answer }}</div>
      </details>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { FAQItem } from "~/types/FAQ";
defineProps<{
  faqData: FAQItem[];
}>();

const handleToggle = (event: Event) => {
  const details = event.currentTarget as HTMLDetailsElement;
  const content = details.querySelector(".answer") as HTMLElement;
  if (!content) return;
  if (details.open) {
    const content = details.querySelector(".answer") as HTMLElement;
    const contentHeight = content.scrollHeight;
    content.style.height = "0";
    requestAnimationFrame(() => {
      content.style.height = `${contentHeight}px`;
    });
  } else {
    const content = details.querySelector(".answer") as HTMLElement;
    const contentHeight = content.scrollHeight;
    content.style.height = `${contentHeight}px`;
    requestAnimationFrame(() => {
      content.style.height = "0";
    });
  }

  content.addEventListener(
    "transitionend",
    () => {
      if (details.open) {
        content.style.height = "auto";
      } else {
        content.style.height = "0";
      }
    },
    { once: true }
  );
};
</script>

<style lang="scss" scoped>
.faq-item {
  overflow: hidden;

  .answer {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  .open {
    @apply hidden shrink-0;
  }

  .close {
    @apply block shrink-0;
  }
}

.faq-item:not(:last-child) {
  @apply border-b border-solid border-pink-light;
}

.faq-item[open] {
  .open {
    @apply block;
  }

  .close {
    @apply hidden;
  }

  .answer {
    height: auto;
    transition: height 0.3s ease;
  }
}
@media (hover: hover) {
  .summary-container {
    @apply hover:text-purple;
  }
}
</style>
