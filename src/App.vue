<script setup>
import mButton from "./components/mButton.vue";
import mInput from "./components/mInput.vue";
import mBadge from "./components/mBadge.vue";
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
  <div class="flex flex-col items-start p-10 gap-10">
    <!-- Examples for mButton component -->
    <mButton> Click me </mButton>

    <!-- Examples for mInput component -->
    <mInput placeholder="Write something" bordered size="xl" />

    <!-- Examples for mBadge component -->
    <mBadge size="sm" color="success"> 100 </mBadge>
    <mBadge color="info"> ! </mBadge>
    <mBadge color="info" dot/>
  </div>
</template>
