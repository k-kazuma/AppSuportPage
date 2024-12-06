<script setup lang="ts">
import type { inquiry } from "@/type";
import { ref } from "vue";
import Modal from "./Modal.vue";

const selectedInquiry = ref<string>("");
const inquiryText = ref<string>("");
const inquiryList: inquiry[] = [
  { id: 1, name: "不具合" },
  { id: 2, name: "機能の追加希望" },
];

const completed = ref<boolean>(false);

const handleSubmit = () => {
  console.log(selectedInquiry.value, inquiryText.value);
};

const handleChange = () => {
  console.log("change");
  if (selectedInquiry.value != "" && inquiryText.value != "") {
    completed.value = true;
  } else {
    completed.value = false;
  }
};
</script>
<template>
  <div>
    <form class="inquiry">
      <h2>問合せフォーム</h2>
      <select v-model="selectedInquiry" @change="handleChange">
        <option value="">選択してください</option>
        <option
          v-for="inquiry in inquiryList"
          :value="inquiry.name"
          :key="inquiry.id"
        >
          {{ inquiry.name }}
        </option>
      </select>
      <textarea
        v-model="inquiryText"
        rows="10"
        @change="handleChange"
      ></textarea>
      <button @click.prevent="handleSubmit" v-if="completed">送信</button>
      <button v-else>入力してください</button>
    </form>
    <Modal v-if="false" :text="inquiryText" :select="selectedInquiry" />
  </div>
</template>

<style lang="scss">
.inquiry {
  select {
    display: block;
    margin: 10px auto;
    padding: 10px;
  }
  textarea {
    width: 100%;
  }
}
</style>
