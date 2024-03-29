<script setup lang="ts">
const props = defineProps({
  href: { type: String },
});
</script>

<template>
  <a :href="href" v-bind="$attrs">
    <slot />
  </a>
</template>

<style scoped lang="scss"></style>
