<template>
  <section id="projects" class="py-20 bg-gray-50 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="opacity-0 translate-y-8"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-700 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-8">
        <div v-show="isVisible" class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">My Projects</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Beberapa project terbaik yang telah saya kerjakan
          </p>
        </div>
      </transition>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(i, index) in 3" :key="i">
          <transition enter-active-class="transition-all duration-700 ease-out"
            enter-from-class="opacity-0 translate-y-8" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-700 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-8">
            <div v-show="isVisible"
              class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              :style="{ transitionDelay: `${(index + 1) * 150}ms` }">
              <div class="relative overflow-hidden">
                <img src="../assets/project1.jpg" alt="Project 1"
                  class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white space-x-4">
                    <a href="#" class="hover:text-blue-400 transition-colors">
                      <i class="fas fa-link text-2xl"></i>
                    </a>
                    <a href="#" class="hover:text-blue-400 transition-colors">
                      <i class="fab fa-github text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Nama Project</h3>
                <p class="text-gray-600 mb-4">Deskripsi singkat tentang project ini...</p>
                <div class="flex gap-2">
                  <a href="#" class="text-primary hover:text-primary-dark transition-colors">Demo</a>
                  <a href="#" class="text-primary hover:text-primary-dark transition-colors">Github</a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.getElementById('projects')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    const threshold = windowHeight * 0.8

    if (rect.top <= threshold && rect.bottom >= 0) {
      if (!isVisible.value) {
        isVisible.value = true
      }
    } else {
      if (isVisible.value && rect.bottom <= 0) {
        isVisible.value = false
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  checkVisibility() // Check initial visibility
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, #000 1px, transparent 1px),
    linear-gradient(to bottom, #000 1px, transparent 1px);
  background-size: 24px 24px;
}

.text-primary {
  @apply text-blue-600;
}

.text-primary-dark {
  @apply text-blue-800;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
