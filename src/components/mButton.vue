<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => [
      "default", 
      "primary", 
      "danger", 
      "outline",
      "success",
      "warning",
      "ghost",
      "link"
    ].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value),
  },
  duration: {
    type: Number,
    default: 150,
    validator: (value) => [0, 150, 300, 500].includes(value),
  },
  rounded: {
    type: [Boolean, String],
    default: false,
    validator: (value) => 
      typeof value === 'boolean' || 
      ['sm', 'md', 'lg', 'full'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [Boolean, String],
    default: false,
    validator: (value) => 
      typeof value === 'boolean' || 
      ['sm', 'md', 'lg', 'xl', 'inner', 'none'].includes(value),
  },
});

const emits = defineEmits(['click']);

const variants = computed(() => ({
  default: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-300",
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-300",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-300",
  outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-200",
  success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-300",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-300",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
  link: "bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus-visible:ring-blue-200",
}));

const sizes = computed(() => ({
  xs: "text-xs px-2.5 py-1.5",
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-2.5",
  xl: "text-xl px-6 py-3",
}));

const iconSizes = computed(() => ({
  xs: "p-1",
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
  xl: "p-3.5",
}));

const durations = computed(() => ({
  0: "",
  150: "transition-all duration-150 ease-in-out",
  300: "transition-all duration-300 ease-in-out",
  500: "transition-all duration-500 ease-in-out",
}));

const rounds = computed(() => ({
  true: "rounded-md",
  false: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
}));

const shadows = computed(() => ({
  true: "shadow",
  false: "shadow-none",
  sm: "shadow-sm",
  md: "shadow",
  lg: "shadow-lg",
  xl: "shadow-xl",
  inner: "shadow-inner",
  none: "shadow-none",
}));

const buttonClasses = computed(() => [
  "font-medium",
  "focus:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  props.icon ? iconSizes.value[props.size] : sizes.value[props.size],
  variants.value[props.variant],
  durations.value[props.duration],
  typeof props.rounded === 'boolean' 
    ? rounds.value[props.rounded] 
    : rounds.value[props.rounded],
  typeof props.shadow === 'boolean' 
    ? shadows.value[props.shadow] 
    : shadows.value[props.shadow],
  props.fullWidth ? "w-full" : "",
  props.disabled || props.loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer",
].join(" "));

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emits('click', event);
  }
};
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span 
      v-if="loading" 
      class="inline-flex items-center mr-2"
    >
      <svg 
        class="w-4 h-4 animate-spin" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4"
        ></circle>
        <path 
          class="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot />
  </button>
</template>