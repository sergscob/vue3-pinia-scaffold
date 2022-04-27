<template>
    <span v-if="loading">Loading...</span>
    <button @click.prevent="onSubmit()">Login</button>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/forgotpassword">Forgot</RouterLink>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue"
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import { useErrorStore } from '@/stores/error.js'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const errorStore = useErrorStore()

const credentials = ref({})
const loading = ref(false)


const onSubmit = () => {
  loading.value = true
  userStore.login(credentials.value)
    .then(() => {
      const redirect = route.query['redirect'];
      if (typeof redirect === 'string') 
        router.push(redirect)
      else 
        router.push('/')
    })
    .catch(() => (loading.value = false));
};


onBeforeUnmount(() => errorStore.$reset());

</script>

<style>
a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 20px;
  border-left: 1px solid var(--color-border);
}
</style>
