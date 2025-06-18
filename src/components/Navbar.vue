<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-yellow-600 h-20 px-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="h-full flex items-center overflow-hidden">
      <img src="../assets/logo-2.png" class="h-14 md:ml-[270px] object-contain" />
    </div>

    <!-- Hamburger Toggle Button -->
    <button 
      @click="toggleMenu"
      class="md:hidden focus:outline-none text-white"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Desktop Nav Links -->
    <ul class="hidden  md:flex space-x-6 mr-72 text-white font-medium">
      <li><a href="#home" class="hover:text-orange-300">Home</a></li>
      <li><a href="#about" class="hover:text-orange-300">About</a></li>
      <li><a href="#services" class="hover:text-orange-300">Service</a></li>
      <li><a href="#team" class="hover:text-orange-300">Team</a></li>
      <li><a href="#contact" class="hover:text-orange-300">Contact</a></li>
    </ul>
  </nav>

  <!-- Mobile Nav Dropdown -->
  <ul
    v-if="isOpen"
    class="md:hidden text-start absolute  top-20 left-0 w-full bg-yellow-600 flex flex-col items-start  space-y-2 py-4 text-white font-medium z-40"
  >
    <li class="hover:text-orange-300 cursor-pointer ml-8">Home</li>
    <li class="hover:text-orange-300 cursor-pointer ml-8">About</li>
    <li class="hover:text-orange-300 cursor-pointer ml-8">Service</li>
    <li class="hover:text-orange-300 cursor-pointer ml-8">Contact</li>
  </ul>
</template>
