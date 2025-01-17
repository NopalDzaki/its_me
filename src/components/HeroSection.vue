<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-background via-elements to-background"></div>

    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Gradient Blobs -->
      <div class="absolute -top-4 -right-4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-blob"></div>
      <div
        class="absolute top-1/2 left-1/4 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl animate-blob animation-delay-2000">
      </div>
      <div
        class="absolute -bottom-8 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-blob animation-delay-4000">
      </div>

      <div class="absolute inset-0">
        <!-- Floating Lines -->
        <div v-for="i in 5" :key="`line-${i}`"
          class="absolute h-px bg-gradient-to-r from-transparent via-highlight/20 to-transparent animate-slide-right"
          :style="{
            top: `${20 * i}%`,
            left: 0,
            right: 0,
            animationDelay: `${i * 0.5}s`
          }">
        </div>

        <!-- Glowing Dots -->
        <div v-for="i in 20" :key="`dot-${i}`" class="absolute w-1 h-1 rounded-full animate-pulse-fade"
          :class="i % 2 === 0 ? 'bg-highlight/30' : 'bg-tertiary/30'" :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }">
        </div>

        <!-- Floating Circles -->
        <div v-for="i in 8" :key="`circle-${i}`" class="absolute rounded-full animate-float-rotate"
          :class="i % 2 === 0 ? 'border border-highlight/20' : 'border border-tertiary/20'" :style="{
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }">
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 text-center relative">
      <transition-group enter-active-class="transition-all duration-700 ease-out"
        enter-from-class="opacity-0 translate-y-8" enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-700 ease-in" leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-8">
        <!-- Heading -->
        <h1 v-show="isVisible" :key="1" class="text-5xl md:text-6xl font-bold text-headline mb-4"
          style="transition-delay: 100ms">
          Halo, saya <span class="text-highlight">Nopal</span>
        </h1>

        <!-- Subtitle -->
        <p v-show="isVisible" :key="2" class="text-xl md:text-2xl text-paragraph mb-8" style="transition-delay: 200ms">
          Backend Developer | UI/UX Designer
        </p>

        <!-- Description -->
        <div v-show="isVisible" :key="3" class="max-w-2xl mx-auto space-y-4 mb-12" style="transition-delay: 300ms">
          <p class="text-paragraph">
            Fokus saya menciptakan solusi digital yang efisien, fungsional, dan ramah pengguna.
          </p>
          <p class="text-paragraph">
            Menggabungkan keterampilan teknis dan desain untuk pengalaman pengguna yang optimal.
          </p>
        </div>

        <!-- Button -->
        <div v-show="isVisible" :key="4" style="transition-delay: 400ms">
          <a href="#contact" class="inline-block bg-button text-buttonText px-8 py-3 rounded-full 
                    hover:bg-button/80 transition-all duration-300">
            Hubungi Saya
          </a>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.getElementById('home')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    const threshold = windowHeight * 0.3

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

// Reset visibility when returning to top
const handleScroll = () => {
  if (window.scrollY === 0) {
    isVisible.value = false
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  }
  checkVisibility()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial animation with slight delay
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse-fade {

  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes float-rotate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-50px) rotate(360deg);
    opacity: 0;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-slide-right {
  animation: slide-right 8s linear infinite;
}

.animate-pulse-fade {
  animation: pulse-fade 3s ease-in-out infinite;
}

.animate-float-rotate {
  animation: float-rotate 15s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
