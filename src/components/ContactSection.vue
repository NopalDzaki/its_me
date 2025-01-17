<template>
  <section id="contact" class="py-20 bg-background relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-blob"></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl animate-blob animation-delay-2000">
      </div>
    </div>

    <div class="container mx-auto px-4 relative">
      <transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="opacity-0 translate-y-8"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-700 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-8">
        <div v-show="isVisible" class="max-w-2xl mx-auto mb-12">
          <p class="text-gray-500 uppercase tracking-wider mb-2">Kontak</p>
          <h2 class="text-4xl font-bold text-headline mb-4">Mari Terhubung</h2>
          <p class="text-paragraph mt-4">
            Jika Anda memiliki pertanyaan atau ingin mendiskusikan project, jangan ragu untuk menghubungi saya.
            Saya senang bisa berbincang dengan Anda!
          </p>
        </div>
      </transition>

      <!-- Contact Form -->
      <div v-show="isVisible" class="max-w-2xl mx-auto">
        <form action="#" method="post" class="space-y-6">
          <div class="flex flex-col">
            <label for="name" class="text-paragraph mb-2 font-medium">Name:</label>
            <input type="text" id="name" name="name" required
              class="px-4 py-2 bg-stroke border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-headline">
          </div>

          <div class="flex flex-col">
            <label for="email" class="text-paragraph mb-2 font-medium">Email:</label>
            <input type="email" id="email" name="email" required
              class="px-4 py-2 bg-stroke border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-headline">
          </div>

          <div class="flex flex-col">
            <label for="message" class="text-paragraph mb-2 font-medium">Message:</label>
            <textarea id="message" name="message" required rows="5"
              class="px-4 py-2 bg-stroke border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent text-headline"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-button text-buttonText py-3 px-6 rounded-lg hover:bg-button/80 transition-colors font-medium">
            Send Message
          </button>
        </form>

        <!-- Social Media Links -->
        <div class="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/NopalDzaki" target="_blank" class="social-link">
            <i class="fab fa-github text-2xl">Github</i>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" class="social-link">
            <i class="fab fa-linkedin text-2xl">Linkedin</i>
          </a>
          <a href="https://instagram.com/nopal.dzaki" target="_blank" class="social-link">
            <i class="fab fa-instagram text-2xl">Instagram</i>
          </a>
          <a href="mailto:naufalforyou11@gmail.com" class="social-link">
            <i class="fas fa-envelope text-2xl">Email</i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)  // Set to true to force the initial visibility for testing

const checkVisibility = () => {
  const element = document.getElementById('contact')
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

.social-link {
  @apply text-paragraph hover:text-highlight transition-colors;
}

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

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
