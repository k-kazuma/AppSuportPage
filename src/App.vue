<script setup lang="ts">
import MainHeader from "./components/Header/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<style scoped>
input {
  display: block;
  margin: 10px 0px;
}
</style>
