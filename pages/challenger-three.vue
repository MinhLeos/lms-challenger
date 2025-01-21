<template>
  <ProfileCard :socialList="socialList" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "challenger-three",
});

useHead({
  title: "Social links profile",
});

const socialList: string[] = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
</script>
