<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Form fields — match exactly with backend
const FirstName = ref('');
const PhoneNumber = ref('');
const Email = ref('');
const Meassage = ref('');

const handleSubmit = async () => {
  const formData = {
    FirstName: FirstName.value,
    PhoneNumber: PhoneNumber.value,
    Email: Email.value,
    Meassage: Meassage.value, // match backend spelling!
  };

  try {
    const response = await axios.post('http://localhost:3000/Form', formData);
    console.log('Success:', response.data);
    alert('Message sent successfully!');

    // Clear form
    FirstName.value = '';
    PhoneNumber.value = '';
    Email.value = '';
    Meassage.value = '';
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    alert('Error: ' + (error.response?.data?.message?.join(', ') || 'Unknown Error'));
  }
};
</script>

<template>
  <div id="contact" class="md:w-[65%] mt-20 mb-20 mx-auto p-6 bg-white shadow-md rounded-md">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="flex flex-col md:flex-row md:gap-10 w-full">
        <div class="flex-1 mb-4 md:mb-0">
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            v-model="FirstName"
            name="FirstName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            v-model="PhoneNumber"
            name="PhoneNumber"
            type="tel"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          v-model="Email"
          name="Email"
          type="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          v-model="Meassage"
          name="Meassage"
          rows="3"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        Submit
      </button>
    </form>
  </div>
</template>
