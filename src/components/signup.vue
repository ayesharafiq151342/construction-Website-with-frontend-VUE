
<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';

const name = ref('');
const PhoneNumber = ref('');
const email = ref('');
const password = ref('');

const nameError = ref('');
const PhoneNumberError = ref('');
const emailError = ref('');
const passwordError = ref('');

const handleSignIn = async () => {
  // Reset errors
  nameError.value = '';
  PhoneNumberError.value = '';
  emailError.value = '';
  passwordError.value = '';

  // Validation
  if (!name.value.trim()) {
    nameError.value = 'Name is required.';
    return;
  }
  if (!/^\d{10,15}$/.test(PhoneNumber.value)) {
    PhoneNumberError.value = 'Please enter a valid phone number.';
    return;
  }
  if (!email.value.includes('@')) {
    emailError.value = 'Please enter a valid email address.';
    return;
  }
  if (!password.value) {
    passwordError.value = 'Password is required.';
    return;
  }

  try {
    // API call
    const response = await fetch('https://example.com/api/si', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        phone: PhoneNumber.value,
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

        <!-- Name Input -->
        <input
          v-model="name"
          placeholder="Name"
          type="text"
          class="w-full p-3 mb-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="nameError" class="text-red-500 text-sm mb-2">{{ nameError }}</p>

        <!-- Phone Input -->
        <input
          v-model="PhoneNumber"
          placeholder="Phone Number"
          type="tel"
          class="w-full p-3 mb-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="PhoneNumberError" class="text-red-500 text-sm mb-2">{{ PhoneNumberError }}</p>

        <!-- Email Input -->
        <input
          v-model="email"
          type="email"
          placeholder="hello@hatypo.studio"
          class="w-full p-3 mb-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
        Sign Up
        </button>

     
 <div class="flex items-center justify-between mt-8 text-sm text-gray-500">
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-6 h-6 rounded-full mr-1" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-6 h-6 rounded-full -ml-2" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-6 h-6 rounded-full -ml-2" />
          </div>
          <div>Join with 20k+ Users!</div>
        </div>
    
        <!-- Footer -->
        <p class="text-center text-sm text-gray-500 mt-4">
          Already have an account?
          <a href="./login" class="text-yellow-600 hover:underline">Login</a>
        </p>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div
      class="hidden md:flex w-1/2 bg-cover bg-center"
      style="background-image: url('/pexels-johannes-havn-835931-1716008.jpg')"
    ></div>
  </div>
</template>


