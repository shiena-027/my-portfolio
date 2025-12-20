<template>
  <div class="space-y-12">

    <!-- VIDEO SECTION -->
    <div class="flex justify-center">
      <video
        src="@/assets/interactive.mp4"
        controls
        class="w-full max-w-2xl rounded-xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20"
      ></video>
    </div>

    <!-- PAGE TITLE -->
    <h1 class="text-3xl font-bold text-white mb-6">
      Portfolio Showcase
    </h1>

    <!-- WEB PAGES -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-white">
        Web Pages
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in webPages"
          :key="project.title"
          :project="project"
          class="bg-white/20 backdrop-blur-lg border border-white/20 text-white shadow-md hover:shadow-lg transition"
        />
      </div>
    </section>

    <!-- FORMS -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-white">
        Form Pages
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in formPages"
          :key="project.title"
          :project="project"
          class="bg-white/20 backdrop-blur-lg border border-white/20 text-white shadow-md hover:shadow-lg transition"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const webPages = [
  {
    title: 'Maintenance Page',
    description: 'Simple maintenance landing page layout.',
    images: [
      new URL('@/assets/showcase/maintenance-page.png', import.meta.url).href,
    ],
  },
  {
    title: 'Data Dashboard UI',
    description: 'Data and database interface.',
    images: [
      new URL('@/assets/showcase/data-database.png', import.meta.url).href,
    ],
  },
  {
    title: 'E-Shop Prototype',
    description: 'E-commerce layout and product display.',
    images: [
      new URL('@/assets/showcase/eshop-proto.png', import.meta.url).href,
    ],
  },
  {
    title: 'Cafe Website',
    description: 'Cafe-themed proto webpage',
    images: [
      new URL('@/assets/showcase/cafe-image.png', import.meta.url).href,
    ],
  },
  {
    title: 'Calculator UI',
    description: 'Simple calculator UI prototype.',
    images: [
      new URL('@/assets/showcase/proto-calcu.png', import.meta.url).href,
    ],
  },
  {
    title: 'Profile Page',
    description: 'Personal profile page layout.',
    images: [
      new URL('@/assets/showcase/profile.png', import.meta.url).href,
    ],
  },
]

const formPages = [
  {
    title: 'Login & Registration Forms',
    description: 'Login and registration form designs.',
    images: [
      new URL('@/assets/showcase/login1.png', import.meta.url).href,
      new URL('@/assets/showcase/regi1.png', import.meta.url).href,
      new URL('@/assets/showcase/login2.png', import.meta.url).href,
    ],
  },
  {
    title: 'Application Registration',
    description: 'Employee multi-step registration application forms.',
    images: [
      new URL('@/assets/showcase/regi-app1.png', import.meta.url).href,
      new URL('@/assets/showcase/regi-app2.png', import.meta.url).href,
      new URL('@/assets/showcase/regi-app3.png', import.meta.url).href,
    ],
  },
  {
    title: 'Post & Account Forms',
    description: 'Post creation and account management forms.',
    images: [
      new URL('@/assets/showcase/post-form.png', import.meta.url).href,
      new URL('@/assets/showcase/login3.png', import.meta.url).href,
      new URL('@/assets/showcase/create-acc.png', import.meta.url).href,
      new URL('@/assets/showcase/forgot-pass.png', import.meta.url).href,
    ],
  },
  {
    title: 'Edit Profile',
    description: 'Edit profile form layouts.',
    images: [
      new URL('@/assets/showcase/edit-profile1.png', import.meta.url).href,
      new URL('@/assets/showcase/edit-profile2.png', import.meta.url).href,
    ],
  },
]
</script>
