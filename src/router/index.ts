import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/login", component: Login, name: "login" },
];

const router = createRouter({
  history: createWebHistory(), // ヒストリーモードを使用
  routes,
});

export default router;
