

<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()

</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
}
</style>
