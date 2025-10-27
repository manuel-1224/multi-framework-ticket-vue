<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">Ticket Dashboard</h1>

    <!-- Add Ticket Form -->
    <div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">Create New Ticket</h2>
      <form @submit.prevent="addTicket" class="flex flex-col gap-4">
        <input
          v-model="newTicket.title"
          type="text"
          placeholder="Enter ticket title"
          required
          class="border border-gray-300 rounded-lg p-2"
        />
        <textarea
          v-model="newTicket.description"
          placeholder="Enter ticket description"
          required
          class="border border-gray-300 rounded-lg p-2"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Ticket
        </button>
      </form>
    </div>

    <!-- Ticket List -->
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">Your Tickets</h2>

      <div v-if="tickets.length === 0" class="text-gray-500 text-center">
        No tickets yet. Add your first one above!
      </div>

      <ul class="space-y-4">
        <li
          v-for="(ticket, index) in tickets"
          :key="index"
          class="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
          <div>
            <h3
              :class="{
                'line-through text-gray-400': ticket.resolved,
                'text-lg font-bold text-gray-800': !ticket.resolved
              }"
            >
              {{ ticket.title }}
            </h3>
            <p class="text-gray-600">{{ ticket.description }}</p>
          </div>

          <div class="mt-3 sm:mt-0 flex space-x-3">
            <button
              @click="toggleResolved(index)"
              class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              {{ ticket.resolved ? 'Reopen' : 'Resolve' }}
            </button>
            <button
              @click="deleteTicket(index)"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const tickets = ref([])
const newTicket = ref({ title: '', description: '' })

// Load tickets from localStorage when the page loads
onMounted(() => {
  const storedTickets = JSON.parse(localStorage.getItem('tickets')) || []
  tickets.value = storedTickets
})

// Watch for changes in tickets and save to localStorage automatically
watch(
  tickets,
  (newTickets) => {
    localStorage.setItem('tickets', JSON.stringify(newTickets))
  },
  { deep: true }
)

// Add new ticket
const addTicket = () => {
  if (newTicket.value.title && newTicket.value.description) {
    tickets.value.push({
      title: newTicket.value.title,
      description: newTicket.value.description,
      resolved: false,
    })
    newTicket.value = { title: '', description: '' }
  }
}

// Toggle ticket resolved/unresolved
const toggleResolved = (index) => {
  tickets.value[index].resolved = !tickets.value[index].resolved
}

// Delete ticket
const deleteTicket = (index) => {
  tickets.value.splice(index, 1)
}
</script>
