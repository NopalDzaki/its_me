<template>
  <nav class="fixed top-0 w-full bg-elements/80 backdrop-blur-sm border-b border-gray-800 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="text-xl font-bold text-highlight">Pall.</a>

        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-paragraph hover:text-headline transition-colors">Home</a>
          <a href="#about" class="text-paragraph hover:text-headline transition-colors">About</a>
          <a href="#projects" class="text-paragraph hover:text-headline transition-colors">Projects</a>
          <a href="#contact" class="text-paragraph hover:text-headline transition-colors">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-paragraph hover:text-headline">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden bg-elements border-t border-gray-800">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" class="block px-3 py-2 text-paragraph hover:text-headline transition-colors"
            @click="isOpen = false">Home</a>
          <a href="#about" class="block px-3 py-2 text-paragraph hover:text-headline transition-colors"
            @click="isOpen = false">About</a>
          <a href="#projects" class="block px-3 py-2 text-paragraph hover:text-headline transition-colors"
            @click="isOpen = false">Projects</a>
          <a href="#contact" class="block px-3 py-2 text-paragraph hover:text-headline transition-colors"
            @click="isOpen = false">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
/* Tambahkan animasi smooth untuk mobile menu */
.md\:hidden {
  transition: all 0.3s ease-in-out;
}
</style>