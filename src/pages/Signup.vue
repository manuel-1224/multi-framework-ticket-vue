<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-600 hover:underline">Login</router-link>
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

const handleSignup = () => {
  let users = JSON.parse(localStorage.getItem('users')) || []

  if (users.find(u => u.email === email.value)) {
    alert('User already exists!')
    return
  }

  const newUser = { email: email.value, password: password.value }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  alert('Account created successfully!')
  router.push('/login')
}
</script>
