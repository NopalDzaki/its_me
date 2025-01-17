<template>
  <section id="about" class="py-20 bg-background relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="opacity-0 translate-y-8"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-700 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-8">
        <div v-show="isVisible" class="mb-12">
          <p class="text-gray-500 uppercase tracking-wider mb-2">ABOUT ME</p>
          <h2 class="text-4xl font-bold text-headline">My Skill.</h2>
          <p class="text-paragraph mt-4 max-w-3xl">
            Saya adalah seorang developer yang sangat passionate dalam mengembangkan aplikasi web yang menarik dan
            fungsional.
            Dengan pengalaman lebih dari 3 tahun di bidang pengembangan web, saya memiliki kemampuan untuk merancang,
            membangun, dan mengelola aplikasi web dari sisi frontend maupun backend dengan fokus pada kualitas dan
            pengalaman pengguna yang optimal.
          </p>
        </div>
      </transition>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <transition-group enter-active-class="transition-all duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-8" enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-700 ease-in" leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-8">
          <!-- Frontend Developer Card -->
          <div v-show="isVisible" :key="1" class="bg-card p-8 rounded-lg group 
                      border border-highlight/10
                      hover:bg-gradient-to-br hover:from-card hover:to-elements
                      transform hover:-translate-y-2 hover:shadow-xl hover:border-highlight/20
                      transition-all duration-300 ease-out" style="transition-delay: 100ms">
            <div class="text-headline mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-code text-3xl"></i>
            </div>
            <h3 class="text-headline text-xl font-semibold mb-2">Frontend Developer</h3>
            <p class="text-paragraph group-hover:text-paragraph/90 transition-colors">
              HTML, CSS, JavaScript, Vue.js
            </p>
          </div>

          <!-- Backend Developer Card -->
          <div v-show="isVisible" :key="2" class="bg-card p-8 rounded-lg group 
                      border border-highlight/10
                      hover:bg-gradient-to-br hover:from-card hover:to-elements
                      transform hover:-translate-y-2 hover:shadow-xl hover:border-highlight/20
                      transition-all duration-300 ease-out" style="transition-delay: 200ms">
            <div class="text-headline mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-server text-3xl"></i>
            </div>
            <h3 class="text-headline text-xl font-semibold mb-2">Backend Developer</h3>
            <p class="text-paragraph group-hover:text-paragraph/90 transition-colors">
              PHP, MySQL, REST API
            </p>
          </div>

          <!-- UI/UX Design Card -->
          <div v-show="isVisible" :key="3" class="bg-card p-8 rounded-lg group 
                      border border-highlight/10
                      hover:bg-gradient-to-br hover:from-card hover:to-elements
                      transform hover:-translate-y-2 hover:shadow-xl hover:border-highlight/20
                      transition-all duration-300 ease-out" style="transition-delay: 300ms">
            <div class="text-headline mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-paint-brush text-3xl"></i>
            </div>
            <h3 class="text-headline text-xl font-semibold mb-2">UI/UX Design</h3>
            <p class="text-paragraph group-hover:text-paragraph/90 transition-colors">
              Figma, User Research, Wireframing
            </p>
          </div>

          <!-- Software Prototyping Card -->
          <div v-show="isVisible" :key="4" class="bg-card p-8 rounded-lg group 
                      border border-highlight/10
                      hover:bg-gradient-to-br hover:from-card hover:to-elements
                      transform hover:-translate-y-2 hover:shadow-xl hover:border-highlight/20
                      transition-all duration-300 ease-out" style="transition-delay: 400ms">
            <div class="text-headline mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-mobile-alt text-3xl"></i>
            </div>
            <h3 class="text-headline text-xl font-semibold mb-2">Software Prototyping</h3>
            <p class="text-paragraph group-hover:text-paragraph/90 transition-colors">
              Responsive Design, Testing, Implementation
            </p>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.getElementById('about')
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
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
