<script setup lang="ts">
defineProps<{ text: string; select: string }>();
</script>

<template>
  <div class="modal">{{ text }}</div>
</template>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0a0a0a80;
}
</style>
