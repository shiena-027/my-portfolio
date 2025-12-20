<template>
  <div
    class="bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
  >
    <div class="relative mb-4 rounded-lg overflow-hidden">
      <img
        :src="project.images[current]"
        class="w-full h-48 object-cover rounded-lg transition duration-500"
      />

      <!-- Controls -->
      <button
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600/80 text-white px-2 py-1 rounded hover:bg-purple-700 transition"
      >
        ‹
      </button>

      <button
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600/80 text-white px-2 py-1 rounded hover:bg-purple-700 transition"
      >
        ›
      </button>
    </div>

    <h3 class="text-lg font-semibold text-white">
      {{ project.title }}
    </h3>
    <p class="text-sm text-white/90 mt-1">
      {{ project.description }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: Object,
})

const current = ref(0)
let interval = null

const next = () => {
  current.value = (current.value + 1) % props.project.images.length
}

const prev = () => {
  current.value =
    (current.value - 1 + props.project.images.length) % props.project.images.length
}

onMounted(() => {
  interval = setInterval(next, 3000) // auto-slide every 3s
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
