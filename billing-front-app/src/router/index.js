import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import CreateActivity from "../views/CreateActivity.vue";
import EditActivity from "../views/EditActivity.vue";
import ShowActivities from "../views/ShowActivities.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //routes
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create-bill",
      name: "create-bill",
      component: null,
    },
    {
      path: "/show-bills",
      name: "show-bills",
      component: null,
    },
    {
      path: "/show-bill/:id",
      name: "show-bill",
      component: null,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: null,
    },
    {
      path: "/create-activity",
      name: "create-activity",
      component: CreateActivity,
    },
    {
      path: "/edit-activity/:id",
      name: "edit-activity",
      component: EditActivity,
      props: true,
    },
    {
      path: "/show-activities",
      name: "show-activities",
      component: ShowActivities,
    },
    // {
    //   path: "/show-activity/:id",
    //   name: "show-activity",
    //   component: null,
    // },

    //redirect
    {
      path: "/404-not-found",
      name: "404-page",
      component: NotFoundPage,
    },

    //catchAll for 404
    {
      path: "/:catchAll(.*)",
      name: "404-catch",
      redirect: "/404-not-found",
    },
  ],
});

export default router;
