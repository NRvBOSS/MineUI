<script setup>
import mButton from "./components/mButton.vue";
import mInput from "./components/mInput.vue"
import { ref } from "vue";

// State for buttons
// const isLoading = ref(false);
// const simulateLoad = () => {
//   isLoading.value = true;
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 2000);
// };


// State for input

</script>

<template>
  <!-- Examples for mButton component -->
   <mButton >
    Click me
   </mButton>

  <!-- Examples for mInput component -->
   <mInput size="xl" />
   
  
</template>
