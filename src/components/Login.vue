<template>
  <Navbar/>
  <div class="min-h-screen flex">
    <!-- Left Side (Form) -->
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
      <div class="max-w-md w-full">
        <h1 class="text-3xl font-bold mb-2">
          Welcome to <span class="text-yellow-600">AshWonders</span>
        </h1>
        <p class="text-gray-500 mb-6">
          Delivering quality construction with cutting-edge solutions for a sustainable future.
        </p>

        <!-- Email Input -->
        <input
          v-model="email"
          type="email"
          placeholder="hello@hatypo.studio"
          class="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="emailError" class="text-red-500 text-sm mb-2">{{ emailError }}</p>

        <!-- Password Input -->
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="passwordError" class="text-red-500 text-sm mb-2">{{ passwordError }}</p>

        <!-- Login Button -->
        <button
          class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full mb-4 font-semibold"
          @click="handleSignIn"
        >
          Login
        </button>

        <!-- Sign Up Link -->
        <p class="text-center text-sm text-gray-500 mt-4">
          Don't have an account?
          <a href="./signup" class="text-yellow-600 hover:underline">Sign Up</a>
        </p>

        <!-- Footer Users Section -->
        <div class="flex items-center justify-between mt-8 text-sm text-gray-500">
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-6 h-6 rounded-full mr-1" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-6 h-6 rounded-full -ml-2" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-6 h-6 rounded-full -ml-2" />
          </div>
          <div>Join with 20k+ Users!</div>
        </div>
      </div>
    </div>

    <!-- Right Side (Visual) -->
    <div
      class="hidden md:flex w-1/2 bg-cover bg-center flex-col justify-center items-center text-center p-8"
      style="background-image: url('/pexels-500photos-com-15338-93400.jpg');"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const handleSignIn = async () => {
  emailError.value = '';
  passwordError.value = '';

  // Validation
  if (!email.value.includes('@')) {
    emailError.value = 'Please enter a valid email address.';
    return;
  }
  if (!password.value) {
    passwordError.value = 'Password is required.';
    return;
  }

  try {
    const response = await fetch('https://example.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Login successful!');
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('API Error:', error);
    alert('Something went wrong. Please try again.');
  }
};
</script>
