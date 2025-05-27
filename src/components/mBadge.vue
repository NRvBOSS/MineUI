<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
  color: {
    type: String,
    default: "primary",
  },
  maxCount: {
    type: Number,
  },
  dot: {
    type: Boolean,
    default: false,
  },
});

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

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
const slots = useSlots();

const badgeContent = computed(() => {
  const slotValue = slots.default ? slots.default()[0]?.children : "";
  const num = Number(slotValue);
  if (!isNaN(num)) {
    return num > 99 ? "99+" : num;
  }
  return slotValue;
});

const badgeClass = computed(() => {
  if (props.dot) {
    return {
      primary: "w-2 h-2 rounded-full bg-blue-500",
      secondary: "w-2 h-2 rounded-full bg-gray-500",
      success: "w-2 h-2 rounded-full bg-green-500",
      danger: "w-2 h-2 rounded-full bg-red-500",
      warning: "w-2 h-2 rounded-full bg-yellow-500",
      info: "w-2 h-2 rounded-full bg-cyan-500",
      light: "w-2 h-2 rounded-full bg-gray-200",
      dark: "w-2 h-2 rounded-full bg-gray-800",
    }[props.color];
  } else {
    return {
      primary: "px-2 py-1 rounded-full bg-blue-500 text-white",
      secondary: "px-2 py-1 rounded-full bg-gray-500 text-white",
      success: "px-2 py-1 rounded-full bg-green-500 text-white",
      danger: "px-2 py-1 rounded-full bg-red-500 text-white",
      warning: "px-2 py-1 rounded-full bg-yellow-500 text-black",
      info: "px-2 py-1 rounded-full bg-cyan-500 text-white",
      light: "px-2 py-1 rounded-full bg-gray-200 text-black",
      dark: "px-2 py-1 rounded-full bg-gray-800 text-white",
    }[props.color];
  }
});
</script>

<template>
  <div class="flex items-center gap-2">
    <span :class="[sizes[props.size], badgeClass]">
      <template v-if="!props.dot">{{ badgeContent }}</template>
    </span>
  </div>
</template>
