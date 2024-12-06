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
@keyframes menu {
  0% {
    top: 125px;
    left: 50px;
  }
  100% {
    background-color: rgba($color: #e1dada, $alpha: 0.83);
    top: 75px;
    left: 0;
  }
}
.header-menu {
  // display: none;
  position: absolute;
  top: -100%;
  left: -100%;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #e1dada, $alpha: 0);
  // transition: all 0.5s;
  &.active {
    animation-name: menu;
    animation-duration: 0.67s;
    animation-fill-mode: forwards;
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
