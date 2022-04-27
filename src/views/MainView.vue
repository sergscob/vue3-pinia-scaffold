<template>
    <div class="main-page">
        <header>header</header>
        <RouterView />
        <footer>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <a v-if="userStore.isAuth" href="" @click.prevent="logout()">Logout</a>
            </nav>
        </footer>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    userStore.logout();
    router.push({ name: "login" });
};
</script>

<style>
.main-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
}

header {
    line-height: 1.5;
    max-height: 100vh;
}
a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}

nav {
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-top: 2rem;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    margin: 0 20px;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
