<script setup>
import { ref } from 'vue';

const activeBox = ref(''); // "" | "change" | "unchange"
const email =ref('');
const Password = ref('')
const showChangeBox = () => {
  activeBox.value = 'change';
};

const showUnchangeBox = () => {
  activeBox.value = 'unchange';
};
const submit_btn=()=>{
console.log(email.value);
console.log(Password.value);


}
</script>

<template>
  <!-- Buttons side by side -->
  <div class="flex gap-4 mb-4">
    <button 
      class="bg-red-600 text-white px-4 py-2 rounded" 
      @click="showChangeBox"
    >
      Change
    </button>

    <button 
      class="bg-green-600 text-white px-4 py-2 rounded" 
      @click="showUnchangeBox"
    >
      Unchange
    </button>
  </div>

  <!-- Show box based on button clicked -->
  <div v-if="activeBox === 'change'" class="p-4 bg-red-100 text-red-900 rounded shadow">
    This is the <strong>Change</strong> box.
  </div>

  <div v-else-if="activeBox === 'unchange'" class="p-4 bg-green-100 text-green-900 rounded shadow">
    This is the <strong>Unchange</strong> box.
  </div>
  <form @submit.prevent="submit_btn">
    <label>email</label>
    <input type="email" v-model="email" name="email">
    <label>
      PAssowrd
    </label>
    <input name="Password" type="password"  v-model="Password">

<button type="submit">submit</button>


  </form>
</template>
