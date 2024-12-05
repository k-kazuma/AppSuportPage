<script setup lang="ts">
import Inquiry from "./Inquiry/Inquiry.vue";
</script>

<template>
  <div class="containar">
    <div>
      <img
        class="icon"
        src="../assets/AppIcon.jpeg"
        alt="アプリアイコン"
        width="150"
      />
    </div>
    <div>
      <h3>AlarmScheduler</h3>
      <button>
        <a
          href="https://apps.apple.com/us/app/alarmscheduler/id6708228546"
          target="_blank"
        >
          ダウンロード
        </a>
      </button>
    </div>
  </div>
  <hr />
  <Inquiry />
</template>

<style lang="scss">
hr {
  margin: 45px;
}
.inquiry {
  button {
    margin: 0 10px;
    background-color: rgb(85, 83, 83);
  }
}
.icon {
  border-radius: 30px;
}
.containar {
  margin-top: 55px;
  display: flex;
  justify-content: center;

  div {
    margin: 0 70px;
  }
}
</style>
