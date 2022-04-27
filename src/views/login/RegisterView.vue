<template>
    <span v-if="userStore.pendingLogin">Loading...</span>
    <button @click.prevent="register()">Register</button>
    <RouterLink to="/login">Login</RouterLink>
</template>

<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const register = async () => {
}


</script>

<style>
a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 20px;
  border-left: 1px solid var(--color-border);
}
</style>
