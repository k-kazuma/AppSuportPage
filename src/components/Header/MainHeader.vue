<script setup lang="ts">
import { ref } from "vue";
import HeaderMenuButton from "./HeaderMenuButton.vue";

import type { menu } from "@/type";
import HeaderMenuList from "./HeaderMenuList.vue";

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
    path: "/inquiry",
  },
];
</script>

<template>
  <div class="main-header">
    <div>
      <a href="/">
        <h2>AlarmScheduler</h2>
      </a>
      <HeaderMenuButton :action="menuAction" :active="buttonIsActive" />
    </div>
    <HeaderMenuList :menuList="menuList" :active="buttonIsActive" />
  </div>
</template>

<style scoped lang="scss">
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #7a7a7a;
  border-bottom: 1px bisque solid;
}

a:hover {
  color: aliceblue;
}
</style>
