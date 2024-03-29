<script setup lang="ts">
import useTestManager from "@/composables/useTestManager";

definePageMeta({
  middleware: ["url-checker"],
});

const PageVariant = useTestManager();
</script>

<template>
  <component :is="PageVariant" :key="PageVariant" />
</template>

<style scoped lang="scss"></style>
