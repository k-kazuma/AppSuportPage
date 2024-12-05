<script setup lang="ts">
import type { inquiry } from "@/type";
import { ref } from "vue";

const selectedInquiry = ref<string>("");
const inquiryText = ref<string>("");
const inquiryList: inquiry[] = [
  { id: 1, name: "不具合" },
  { id: 2, name: "機能の追加希望" },
];

const completed: boolean = ref<boolean>(false);

const handleSubmit = () => {
  console.log(selectedInquiry.value, inquiryText.value);
};
</script>
<template>
  <div>
    <form class="inquiry">
      <h2>問合せフォーム</h2>
      <select v-model="selectedInquiry">
        <option value="">選択してください</option>
        <option
          v-for="inquiry in inquiryList"
          :value="inquiry.name"
          :key="inquiry.id"
        >
          {{ inquiry.name }}
        </option>
      </select>
      <textarea v-model="inquiryText" rows="10"></textarea>
      <button @click.prevent="handleSubmit">送信</button>
    </form>
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
