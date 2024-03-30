<script setup lang="ts">
import { shallowRef, onMounted } from "vue";
import useTestManager from "@/composables/useTestManager";

definePageMeta({
  middleware: ["url-checker"],
});

const customComponent = shallowRef(null);

onMounted(() => {
  const component = useTestManager();
  customComponent.value = component;
});
</script>

<template>
  <component :is="customComponent" />
</template>

<style scoped lang="scss"></style>
