<script setup lang="ts"></script>

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
  <div>
    <p>アラームの日時管理に特化した軽量アラームアプリです。</p>
    <p>
      繰り返し設定中アラームのスキップ機能や、カレンダーUIでのアラーム設置が可能です。
    </p>
  </div>
  <div class="inquiry">
    <button>
      <a href="/inquiry"> 問合せフォーム </a>
    </button>
    <button>
      <a href="mailto:alarm.scheduler@gmail.com"> メールで問合せ </a>
    </button>
    <p>
      ※お問い合わせいただいた内容への返信は行っておりません。お送りいただいた内容をもとに今後のサービス改善へ努めます。
    </p>
  </div>
</template>

<style lang="scss">
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
