import AdminQuestionCreate from "@/views/admin/AdminQuestionCreate.vue";
import AdminQuestionEdit from "@/views/admin/AdminQuestionEdit.vue";
import AdminQuestions from "@/views/admin/AdminQuestions.vue";
import Vue from "vue";
import VueRouter, { NavigationGuard, RouteConfig } from "vue-router";

Vue.use(VueRouter);

const verifyAdmin: NavigationGuard = (to, from, next) => {
  if (localStorage.getItem("isAdmin") !== "1") {
    next({ name: "Questions" });
  } else {
    next();
  }
};

const routes: Array<RouteConfig> = [
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
      import(/* webpackChunkName: "questions" */ "../views/Questions.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    name: "admin-questions-create",
    path: "/admin/questions/create",
    component: AdminQuestionCreate,
    beforeEnter: verifyAdmin
  },
  {
    name: "admin-questions-edit",
    path: "/admin/questions/:questionId",
    component: AdminQuestionEdit,
    beforeEnter: verifyAdmin
  },
  {
    path: "/admin",
    name: "admin-questions",
    component: AdminQuestions,
    beforeEnter: verifyAdmin
  },
  {
    path: "*",
    redirect: "/questions"
  }
];

const router = new VueRouter({
  base: "/vue/",
  mode: "history",
  routes
});

export default router;
