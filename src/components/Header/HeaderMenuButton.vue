<script setup lang="ts">
defineProps<{
  active: boolean;
  action: Function;
}>();
</script>

<template>
  <div
    class="btn-trigger"
    :class="active ? `active` : ``"
    id="menu"
    @click="action()"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style>
.btn-trigger {
  position: absolute;
  top: 15px;
  right: 10px;
  width: 50px;
  height: 44px;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
}

.btn-trigger,
.btn-trigger span {
  display: inline-block;
  transition: all 0.5s;
  box-sizing: border-box;
}
.btn-trigger span:nth-of-type(1) {
  top: 0;
}
.btn-trigger span:nth-of-type(2) {
  top: 20px;
}
.btn-trigger span:nth-of-type(3) {
  bottom: 0;
}

#menu.active span:nth-of-type(1),
#menu.active span:nth-of-type(3) {
  width: 20px;
}
#menu.active span:nth-of-type(1) {
  -webkit-transform: translate(-1px, 13px) rotate(-45deg);
  transform: translate(-1px, 13px) rotate(-45deg);
}
#menu.active span:nth-of-type(3) {
  -webkit-transform: translate(-1px, -13px) rotate(45deg);
  transform: translate(-1px, -13px) rotate(45deg);
}
</style>
