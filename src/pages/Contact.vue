<template>
  <div class="max-w-3xl mx-auto mt-10 bg-white/30 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow animate-fade-in">
    <h1 class="text-2xl font-bold mb-2 text-center text-white">Contact Me</h1>
    <p class="text-white/80 text-center mb-8">
      Feel free to send me a message. I’ll get back to you as soon as I can.
    </p>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Name -->
      <div class="animate-slide-up">
        <label class="block text-sm font-medium text-white mb-1">
          <i class="fas fa-user mr-2 text-purple-700 text-lg"></i>
          Name
        </label>
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="Your name"
          class="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <!-- Email -->
      <div class="animate-slide-up delay-100">
        <label class="block text-sm font-medium text-white mb-1">
          <i class="fas fa-envelope mr-2 text-purple-700 text-lg"></i>
          Email
        </label>
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <!-- Message -->
      <div class="animate-slide-up delay-200">
        <label class="block text-sm font-medium text-white mb-1">
          <i class="fas fa-comment-dots mr-2 text-purple-700 text-lg"></i>
          Message
        </label>
        <textarea
          v-model="form.message"
          rows="4"
          required
          placeholder="Write your message here..."
          class="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-purple-600 text-white py-3 rounded-lg
               font-semibold hover:bg-purple-700
               hover:scale-[1.02] transition-all duration-300
               flex items-center justify-center gap-2"
      >
        <i class="fas fa-paper-plane"></i>
        Send Message
      </button>

      <!-- Success Message -->
      <p
        v-if="success"
        class="text-green-400 text-center font-medium mt-4 animate-fade-in"
      >
        ✅ Message sent successfully!
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  success.value = true

  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
