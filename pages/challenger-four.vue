<template>
  <BlogReviewCard :blog-review="blogReviewData" />
</template>

<script lang="ts" setup>
import type { BlogReviewType } from "~/types/BlogReview";

definePageMeta({
  layout: "challenger-four",
});
const blogReviewData: BlogReviewType = {
  bannerUrl: "https://mgisolutions-coffee.imgix.net/special-coffee/illustration-article.svg",
  bannerAltText: "illustration-article",
  badge: "Learning",
  timePublished: "Published 21 Dec 2023",
  title: "HTML 7 CSS foundations",
  url: "#!",
  description: "These languages are the backbone of every website, defining structure, content, and presentation.",
  creatorAvatar: "https://mgisolutions-coffee.imgix.net/special-coffee/challenger-4.png",
  creatorName: "Greg Hopper",
};
</script>
