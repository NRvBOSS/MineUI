<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "sm"
  },
  color: {
    type: String,
  },
});

const sizes = computed(() => ({
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
}))

const colors = computed(() => ({
  primary: "px-2 py-1 rounded-full bg-blue-500 text-white",
  secondary: "px-2 py-1 rounded-full bg-gray-500 text-white",
  success: "px-2 py-1 rounded-full bg-green-500 text-white",
  danger: "px-2 py-1 rounded-full bg-red-500 text-white",
  warning: "px-2 py-1 rounded-full bg-yellow-500 text-black",
  info: "px-2 py-1 rounded-full bg-cyan-500 text-white",
  light: "px-2 py-1 rounded-full bg-gray-200 text-black",
  dark: "px-2 py-1 rounded-full bg-gray-800 text-white",
}));
</script>

<template>
  <div class="flex items-center gap-2">
    <span :class="`${sizes[size]} ${colors[color]}`">
      <slot></slot>
    </span>
  </div>
</template>
