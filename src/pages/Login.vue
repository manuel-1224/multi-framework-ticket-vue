<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?
        <router-link to="/signup" class="text-blue-600 hover:underline">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(u => u.email === email.value && u.password === password.value)

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    alert(`Welcome back, ${user.email}!`)
    router.push('/')
  } else {
    alert('Invalid email or password!')
  }
}
</script>
