<script setup lang="ts">
import type { menu } from "@/type";

defineProps<{ menuList: menu[]; active: boolean }>();
</script>

<template>
  <div class="header-menu" :class="active ? `active` : ``">
    <ul>
      <li v-for="menu in menuList" v-bind:key="menu.title">
        <a :href="menu.path">{{ menu.title }} </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.header-menu {
  position: fixed;
  top: 125px;
  left: 50px;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #e1dada, $alpha: 0);
  transition: all 0.5s;
  z-index: -1;
  &.active {
    display: block;
    background-color: rgba($color: #e1dada, $alpha: 0.83);
    top: 75px;
    left: 0;
    z-index: 1;

    ul > li {
      opacity: 1;
    }
  }
  ul {
    padding: 0;

    li {
      opacity: 0;
      background-color: #1e1d1d;
      padding: 15px;
      margin: 5px auto;
      color: #7a7a7a;
      transition: all 0.5s;
    }
  }
}
</style>
