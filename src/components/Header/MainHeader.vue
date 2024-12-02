<script setup lang="ts">
import { ref } from "vue";
import HeaderMenuButton from "./HeaderMenuButton.vue";

interface menu {
  title: string;
  path: string;
}

const buttonIsActive = ref<boolean>(false);
const menuAction = () => {
  buttonIsActive.value = !buttonIsActive.value;
};

const menuList: menu[] = [
  {
    title: "プライバシーポリシー",
    path: "/abc",
  },
  {
    title: "問い合わせ",
    path: "/toi",
  },
];
</script>

<template>
  <div class="main-header">
    <a href="/">
      <h2>AlarmScheduler</h2>
    </a>
    <HeaderMenuButton :action="menuAction" :active="buttonIsActive" />
  </div>
  <div class="header-menu" :class="buttonIsActive ? `active` : ``">
    <ul>
      <li v-for="menu in menuList" v-bind:key="menu.title">
        <a :href="menu.path">{{ menu.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
//ハンバーガーメニューのCSS
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
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  background-color: #7a7a7a;
  border-bottom: 1px bisque solid;
}

a:hover {
  color: aliceblue;
}
</style>
