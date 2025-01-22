<template>
  <FAQ :faq-data="faqData" />
</template>

<script lang="ts" setup>
import type { FAQItem } from "~/types/FAQ";

definePageMeta({
  layout: "challenger-five",
});

useHead({
  title: "FAQ Accordion",
});

const faqData: FAQItem[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers a free tier with access to a limited number of challenges. However, to unlock the full library of challenges and additional features like design files and private solutions, you'll need a paid subscription.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Absolutely! Frontend Mentor encourages you to showcase your completed projects in your portfolio. It's a great way to demonstrate your skills and experience to potential employers or clients.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The Frontend Mentor Discord server is a highly active community where you can quickly get help when you're stuck on a challenge. You can post your questions in the dedicated #help channel, and fellow learners or mentors will be happy to assist you.",
  },
];
</script>
