import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/questions"
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/questions",
    name: "Questions",
    component: () =>
      import(/* webpackChunkName: "Questions" */ "../views/Questions.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue")
  }
];
const router = new VueRouter({
  base: "/vue/",
  routes
});
export default router;
//# sourceMappingURL=index.js.map
