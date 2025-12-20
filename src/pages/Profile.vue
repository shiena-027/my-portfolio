<template>
  <div class="max-w-6xl mx-auto mt-10 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 text-white">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Left column: Profile picture + Social Media -->
      <div class="flex flex-col items-center md:items-start md:w-1/3">
        <img 
          src="@/assets/profile.jpg" 
          alt="Profile" 
          class="w-48 h-48 rounded-full object-cover mb-4 transition-transform duration-500 hover:scale-105"
        />
        <div class="text-center md:text-left">
          <h1 class="text-2xl font-bold">SHIENA MAE R. MIRANDA</h1>
          <p class="text-white/80">09451822683 | mirandamaimai984@gmail.com</p>
        </div>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
          <a href="https://facebook.com/maimai.miranda.3" target="_blank" class="text-blue-400 hover:text-blue-600 transition-colors flex items-center gap-1">
            <i class="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.linkedin.com/in/miranda-shiena-mae-r-458020268/" target="_blank" class="text-blue-300 hover:text-blue-500 transition-colors flex items-center gap-1">
            <i class="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/hyuna2700?igsh=MTM4amtoZXAyZmd5MA==" target="_blank" class="text-pink-400 hover:text-pink-600 transition-colors flex items-center gap-1">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://github.com/shiena-027" target="_blank" class="text-white/80 hover:text-white transition-colors flex items-center gap-1">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      <!-- Right column: Profile info -->
      <div class="flex-1 flex flex-col gap-6">
        <!-- Job Summary -->
        <section class="bg-white/10 p-4 rounded-xl shadow transition-transform duration-500 hover:translate-y-1">
          <h2 class="text-xl font-bold mb-2 border-b border-indigo-300 pb-1">Job Summary</h2>
          <p>
            Detail-oriented Computer Engineering undergraduate with proven experience in quality assurance, content evaluation, and AI-powered content creation. Strong analytical skills with a systematic approach to reviewing and improving written material. Demonstrated ability to work independently in remote environments while maintaining high quality standards and meeting project guidelines.
          </p>
        </section>

        <!-- Experience -->
        <section class="bg-white/10 p-4 rounded-xl shadow transition-transform duration-500 hover:translate-y-1">
          <h2 class="text-xl font-bold mb-2 border-b border-indigo-300 pb-1">Experience</h2>
          <ul class="list-disc list-inside">
            <li>
              <strong>IT Intern</strong> | Knowles Training Institute, Singapore (Apr 2023 – Jul 2023)
              <ul class="list-disc list-inside ml-5 text-white/80">
                <li>Conducted comprehensive quality checks on corporate website sections, evaluating accuracy, clarity, and user experience.</li>
                <li>Evaluated and improved AI-generated content using ChatGPT, ensuring relevance and coherence.</li>
                <li>Reviewed website content structure and logic, providing feedback to enhance quality.</li>
                <li>Developed marketing content and advertisement designs with creative problem-solving.</li>
                <li>Analyzed website performance using Google Ads metrics to optimize online presence and user engagement.</li>
                <li>Worked independently in a fast-paced remote environment, managing multiple projects with attention to detail.</li>
              </ul>
            </li>
          </ul>
        </section>

        <!-- Technical Skills -->
        <section class="bg-white/10 p-4 rounded-xl shadow transition-transform duration-500 hover:translate-y-1">
          <h2 class="text-xl font-bold mb-2 border-b border-indigo-300 pb-1">Technical Skills</h2>
          <div class="flex flex-wrap gap-2">
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">HTML5</span>
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">CSS3</span>
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">JavaScript (Basic)</span>
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">Vue.js</span>
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span class="bg-indigo-800/30 text-white px-3 py-1 rounded-full text-sm">AI Platforms (ChatGPT, Claude.AI)</span>
          </div>
        </section>

        <!-- Soft Skills -->
        <section class="bg-white/10 p-4 rounded-xl shadow transition-transform duration-500 hover:translate-y-1">
          <h2 class="text-xl font-bold mb-2 border-b border-indigo-300 pb-1">Soft Skills</h2>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Attention to Detail</span>
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Independent Work</span>
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Project Management</span>
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Team Collaboration</span>
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Leadership</span>
            <span class="bg-green-800/30 text-white px-3 py-1 rounded-full text-sm">Quick Learner</span>
          </div>
        </section>

        <!-- Education -->
        <section class="bg-white/10 p-4 rounded-xl shadow transition-transform duration-500 hover:translate-y-1">
          <h2 class="text-xl font-bold mb-2 border-b border-indigo-300 pb-1">Education</h2>
          <ul class="list-disc list-inside">
            <li>
              Bachelor of Science in Computer Engineering, Polytechnic University of the Philippines (2023–2026)
            </li>
            <li>
              Diploma in Computer Engineering Technology, Polytechnic University of the Philippines (2020–2023)
              <ul class="list-disc list-inside ml-5 text-white/80">
                <li>Senior Executive Officer in Society of Engineering Technology Students (SETS)</li>
                <li>GWA: 1.49</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
