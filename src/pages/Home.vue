<template>
  <div class="min-h-screen bg-pink-50 flex flex-col items-center relative overflow-hidden">

    <!-- Decorative Circle -->
    <div class="absolute top-20 -left-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>

    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center py-20 px-6 z-10">
      <h1 class="text-5xl md:text-6xl font-bold text-pink-600 mb-6 leading-tight">
        Manage Your Tickets Seamlessly
      </h1>
      <p class="text-gray-700 text-lg md:text-xl max-w-2xl mb-8">
        A unified ticket management platform across React, Vue, and Twig — simple, powerful, and responsive.
      </p>
      <div class="space-x-4">
        <router-link
          to="/login"
          class="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
          Login
        </router-link>
        <router-link
          to="/signup"
          class="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg shadow hover:bg-pink-100 transition">
          Get Started
        </router-link>
      </div>
    </section>

    <!-- Wave Section -->
    <div class="absolute bottom-0 left-0 w-full">
      <img src="../assets/wave.svg" alt="wave background" class="w-full" />
    </div>
  </div>
</template>
