import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Header from "../components/Header.vue";
import CreateBlog from "../views/CreateBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Header,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/create-blog",
        name: "CreateBlog",
        component: CreateBlog,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
