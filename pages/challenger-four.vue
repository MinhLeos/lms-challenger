<template>
  <BlogReviewCard :blog-review="blogReviewData" />
</template>

<script lang="ts" setup>
import type { BlogReviewType } from "~/types/BlogReview";

definePageMeta({
  layout: "challenger-four",
});
const blogReviewData: BlogReviewType = {
  bannerUrl: "/images/illustration-article.svg",
  bannerAltText: "illustration-article",
  badge: "Learning",
  timePublished: "Published 21 Dec 2023",
  title: "HTML 7 CSS foundations",
  url: "#!",
  description: "These languages are the backbone of every website, defining structure, content, and presentation.",
  creatorAvatar: "/images/challenger-4.png",
  creatorName: "Greg Hopper",
};
</script>
