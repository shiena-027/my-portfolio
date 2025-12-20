<template>
  <div class="min-h-screen flex items-center justify-center bg-bgMain">
    <div class="w-full max-w-md rounded-xl shadow-lg p-6 bg-dashboard">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="block text-sm mb-1 text-gray-900">Username</label>
          <input
            v-model="username"
            type="text"
            class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-buttonColor"
            required
          />
        </div>
        <div class="mb-3">
          <label class="block text-sm mb-1 text-gray-900">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-buttonColor"
            required
          />
        </div>
        <p v-if="error" class="text-sm text-red-600 mb-2">{{ error }}</p>
        <button
          type="submit"
          class="w-full py-2 rounded bg-buttonColor text-gray hover:bg-purple-600 transition">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const VALID_USERNAME = 'Mai'
const VALID_PASSWORD = '123456789'

function handleLogin() {
  error.value = ''
  if (username.value === VALID_USERNAME && password.value === VALID_PASSWORD) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/portfolio/profile')
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>
