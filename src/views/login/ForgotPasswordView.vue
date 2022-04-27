<template>
    <button @click.prevent="forgot()">Forgot</button>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
</template>

<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const forgot = async () => {
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
