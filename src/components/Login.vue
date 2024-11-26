<script setup lang="ts">
import { ref } from "vue";

const loginId = ref<string>("");
const loginPw = ref<string>("");
const errorId = ref<boolean>(false);

const checkUser = (id: string, pw: string) => {
  if (id == id && pw == pw) {
    console.log(id, pw);
    return true;
  }
};

const isInValidEmail = (): void => {
  const reg = new RegExp(
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
  );
  errorId.value = !reg.test(loginId.value);
};
</script>

<template>
  <h1>Login</h1>
  <p v-if="errorId">IDを正しく入力してください</p>
  <div class="login">
    <div>
      <label for="id">ID:</label>
      <input type="text" id="id" v-model="loginId" @blur="isInValidEmail()" />
    </div>
    <div>
      <label for="pw">PW:</label>
      <input type="text" id="pw" v-model="loginPw" />
    </div>
  </div>
  <button @click="checkUser(loginId, loginPw)">ログイン</button>
</template>
