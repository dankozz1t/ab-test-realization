<script setup lang="ts">
import useTestManager from "@/composables/useTestManager";

const PageVariant = useTestManager("page-test1");
</script>

<template>
  <component :is="PageVariant" />
</template>

<style scoped lang="scss"></style>

