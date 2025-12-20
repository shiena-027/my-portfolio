<template>
  <!-- Background wrapper -->
  <div class="relative min-h-screen bg-container">
    <!-- Background image layer -->
    <div class="absolute inset-0 bg-image"></div>

    <!-- Dark blur overlay -->
    <div class="absolute inset-0 bg-overlay"></div>

    <!-- App content -->
    <div class="relative flex min-h-screen">
      <!-- Sidebar -->
      <aside class="fixed z-30 h-full w-64 glass-panel text-white">
        <!-- Top -->
        <div class="p-4 text-center">
          <span class="font-cinzel text-xl tracking-wide">
            My Portfolio
          </span>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 space-y-1 mt-4 px-2">
          <RouterLink
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition"
            active-class="bg-purple-600/40"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </RouterLink>
        </nav>

        <!-- Bottom controls -->
        <div class="p-4 border-t border-purple-400/40">
          <button
            @click="logout"
            class="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-500/40 transition"
          >
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 ml-64 p-6">
        <div class="glass-panel p-6 rounded-xl">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const menu = [
  { name: 'Profile', path: '/portfolio/profile', icon: 'fas fa-user' },
  { name: 'Showcase', path: '/portfolio/showcase', icon: 'fas fa-briefcase' },
  { name: 'Contact', path: '/portfolio/contact', icon: 'fas fa-envelope' },
  { name: 'Creative', path: '/portfolio/creative', icon: 'fas fa-lightbulb' },
]

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<style scoped>
/* Background image */
.bg-image {
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  transform: scale(1.1);
}

/* Dark overlay to enhance purple theme */
.bg-overlay {
  background: rgba(40, 20, 60, 0.6);
  backdrop-filter: blur(4px);
}

/* Glassmorphism panel */
.glass-panel {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

/* Fonts */
.font-cinzel {
  font-family: 'Cinzel', serif;
}
</style>
