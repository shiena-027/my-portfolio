<template>
  <div class="space-y-10">
    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-white">
      Creative Space
    </h1>

    <!-- Interests Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-white">
        Interests
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="interest in interests"
          :key="interest.title"
          class="bg-white/20 backdrop-blur-lg border border-white/20 p-5 rounded-xl shadow hover:shadow-md transition text-white"
        >
          <i :class="interest.icon" class="text-3xl text-purple-800 mb-3"></i>
          <h3 class="text-lg font-semibold">
            {{ interest.title }}
          </h3>
          <p class="text-sm mt-2 text-white/80">
            {{ interest.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Hobbies Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-white">
        Hobbies
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="hobby in hobbies"
          :key="hobby.title"
          class="bg-white/20 backdrop-blur-lg border border-white/20 p-5 rounded-xl shadow hover:shadow-md transition text-white"
        >
          <i :class="hobby.icon" class="text-3xl text-purple-800 mb-3"></i>
          <h3 class="text-lg font-semibold">
            {{ hobby.title }}
          </h3>
          <p class="text-sm mt-2 text-white/80">
            {{ hobby.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const interests = [
  {
    title: 'Technology',
    description: 'Interested in web development, UI design, and AI-powered tools.',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Writing',
    description: 'Enjoy writing creative content, stories, and structured documentation.',
    icon: 'fas fa-pen-nib',
  },
  {
    title: 'Design',
    description: 'Love exploring clean layouts, color harmony, and user-friendly interfaces.',
    icon: 'fas fa-palette',
  },
]

const hobbies = [
  {
    title: 'Gaming',
    description: 'Plays Honkai: Star Rail (HSR) and Minecraft for relaxation and creativity.',
    icon: 'fas fa-gamepad',
  },
  {
    title: 'Music',
    description: 'Listening to Epic the Musical, Kpop and other music that makes me energetic.',
    icon: 'fas fa-music',
  },
  {
    title: 'Learning',
    description: 'Reading Novels, Manhwa, Manga, Comics and Oneshot stories online.',
    icon: 'fas fa-book-open',
  },
]
</script>
