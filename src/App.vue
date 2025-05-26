<script setup>
import mButton from "./components/mButton.vue";
import { ref } from "vue";

const isLoading = ref(false);

const simulateLoad = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="gap-6 flex flex-col items-start p-10">
    <!-- Primary button with large size and rounded corners -->
    <mButton variant="primary" size="lg" rounded="true"> Add New Item </mButton>

    <!-- Outline button with small size -->
    <mButton variant="outline" size="sm"> Delete Selected </mButton>

    <!-- Danger button with slow transition -->
    <mButton variant="danger" duration="500"> Cancel Operation </mButton>

    <!-- Default button with medium size -->
    <mButton> Submit Form </mButton>

    <!-- Disabled button -->
    <mButton variant="primary" disabled> Save Changes (Disabled) </mButton>
  </div>

  <!-- Advanced -->
  <div class="gap-6 flex flex-col items-start p-10">
    <!-- Button with loading state -->
    <mButton variant="primary" :loading="isLoading" @click="simulateLoad">
      {{ isLoading ? "Processing..." : "Start Process" }}
    </mButton>

    <!-- Full-width button -->
    <mButton variant="success" fullWidth> Complete Purchase </mButton>

    <!-- Button with custom rounded size -->
    <mButton variant="warning" rounded="lg"> Warning Action </mButton>

    <!-- Icon button -->
    <mButton variant="ghost" icon rounded="full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    </mButton>

    <!-- Link-style button -->
    <mButton variant="link"> View More Options </mButton>
  </div>


  <!-- Button Group -->
   <div class="p-10">
    <h2 class="text-lg font-medium mb-4">Button Group</h2>
    
    <div class="flex gap-2">
      <mButton variant="outline" size="sm">
        Previous
      </mButton>
      
      <mButton variant="primary" size="sm">
        Next
      </mButton>
    </div>

    <h2 class="text-lg font-medium mt-6 mb-4">Toolbar</h2>
    
    <div class="flex gap-2 flex-wrap">
      <mButton variant="outline" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Edit
      </mButton>
      
      <mButton variant="outline" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Delete
      </mButton>
      
      <mButton variant="outline" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download
      </mButton>
    </div>
  </div>
</template>
