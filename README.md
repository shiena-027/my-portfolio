# My Portfolio

A personal portfolio web application built with **Vue.js 3** and **Tailwind CSS**, showcasing my profile, projects, contact form, and a creative space. This project uses **Vue Router** for navigation and implements **glassmorphism UI effects** and a purple-themed design.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Installation & Running Locally](#installation--running-locally)  
- [Code Notes & Comments](#code-notes--comments)  
- [Screenshots](#screenshots)  

---

## Features

- **Login Page:** Simple form validation with hardcoded credentials.  
- **Profile Page:** Displays personal details, photo, contact info, social media links, skills, experience, and education.  
- **Portfolio Showcase:** Displays projects and forms using cards with image slideshows.  
- **Contact Page:** Visitors can leave messages through a form.  
- **Creative Page:** Custom section to show hobbies, interests, or other creative content.  
- **Design & Effects:**  
  - Glassmorphism style cards and panels.  
  - Background image with blur overlay to highlight the purple theme.  
  - Smooth hover and animation effects.  

---

## Technologies Used

- **Frontend:** Vue.js 3 (Composition API)  
- **Styling:** Tailwind CSS  
- **Routing:** Vue Router  
- **Icons:** Font Awesome  
- **Assets:** Images, videos, profile photo  

---

## Project Structure

my-portfolio/
├─ src/
│ ├─ assets/ # Images, videos, and other media
│ ├─ components/ # Reusable components like ProjectCard.vue, DashboardLayout.vue
│ ├─ pages/ # Vue pages: Login, Profile, Showcase, Contact, Creative
│ ├─ router/ # Vue Router setup
│ ├─ App.vue
│ ├─ main.js
│ └─ style.css # Global styles
├─ public/
│ └─ vite.svg
├─ .gitignore
├─ package.json
├─ tailwind.config.js
└─ README.md

---

**Notes:**  
- Each page has its **own Vue component**.  
- `DashboardLayout.vue` handles the main layout, sidebar, and background styling.  
- `ProjectCard.vue` is a reusable component for showcasing projects.  

---

## Installation & Running Locally

1. **Clone the repository:**

git clone https://github.com/shiena-027/my-portfolio.git
cd my-portfolio

2. **Install npm install**

    npm install
   
3. **Start the development server:**

   npm run dev

4. **Open your browser at the URL shown in the terminal (usually http://localhost:5173) to view the portfolio.**

---

## Code Notes & Comments

- All key sections of code include comments explaining their purpose.
- Vue Router handles navigation between pages: /login, /portfolio/profile, /portfolio/showcase, /portfolio/contact, /portfolio/creative.
- Form validation in Login.vue is simple and uses reactive ref variables.
- Glassmorphism effects are applied through .glass-panel class with backdrop-filter in DashboardLayout.vue.
- Project cards have auto-sliding images implemented in ProjectCard.vue.
- Each page uses Tailwind CSS classes for styling and hover/focus effects.

---

## Author

**Shiena Mae R. Miranda**
- Email: mirandamaimai984@gmail.com
- GitHub: shiena-027
