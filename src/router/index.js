import { createRouter, createWebHistory } from "vue-router";

import MainView from "../views/MainView.vue";
import LoginView from "../views/login/LoginView.vue";
import RegisterView from "../views/login/RegisterView.vue";
import ForgotPasswordView from "../views/login/ForgotPasswordView.vue";
import Page404 from "../views/404View.vue";

import { useUserStore } from "@/stores/user.js";

const checkIfLogged = () => {
    const userStore = useUserStore();
    if (userStore.isAuth) {
        return { path: "/" };
    }
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { name: "login", path: "/login", component: LoginView, beforeEnter: checkIfLogged },
        { name: "register", path: "/register", component: RegisterView, beforeEnter: checkIfLogged },
        { name: "forgotpassword", path: "/forgotpassword", component: ForgotPasswordView, beforeEnter: checkIfLogged },
        {
            name: "main",
            path: "/",
            component: MainView,
            meta: {
                requiresAuth: true,
            },
            children: [
                { name: "home", path: "/", component: () => import("../views/HomeView.vue") },
                { name: "about", path: "/about", component: () => import("../views/AboutView.vue") },
            ],
        },
        {
            name: "404",
            path: "/:pathMatch(.*)*",
            component: Page404,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.isAuth) {
        const query = to.fullPath === "/" ? {} : { redirect: to.fullPath };
        next({ name: "login", query });
    } else {
        next();
    }
});

export default router;
