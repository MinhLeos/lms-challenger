<template>
  <ProfileCard :socialList="socialList" />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "challenger-three",
});

const socialList: string[] = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
</script>
