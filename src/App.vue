<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/MainNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
