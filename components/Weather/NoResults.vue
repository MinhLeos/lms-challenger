<template>
  <div class="flex items-center justify-center py-2">
    <p class="text-neutral-0 text-2xl">
      No search results found!
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  query?: string
}>()

defineEmits<{
  (e: 'search', query: string): void
}>()
</script>
