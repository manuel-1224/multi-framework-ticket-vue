<template>
  <nav class="flex items-center justify-between bg-white px-6 py-4 shadow-md">
    <router-link to="/" class="text-2xl font-bold text-blue-600">TicketApp</router-link>

    <div class="space-x-4">
      <router-link v-if="!isLoggedIn" to="/login" class="text-gray-700 hover:text-blue-600">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="text-gray-700 hover:text-blue-600">Sign Up</router-link>

      <router-link
        v-if="isLoggedIn"
        to="/dashboard"
        class="text-gray-700 hover:text-blue-600"
      >
        Dashboard
      </router-link>


      <button
        v-if="isLoggedIn"
        @click="logout"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isLoggedIn = ref(false)
const router = useRouter()

onMounted(() => {
  const user = localStorage.getItem('loggedInUser')
  isLoggedIn.value = !!user
})

const logout = () => {
  localStorage.removeItem('loggedInUser')
  isLoggedIn.value = false
  router.push('/login')
}
</script>
