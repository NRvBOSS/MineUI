<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  bold: {
    type: Boolean,
    default: false,
  },
  subtitle: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) =>
      ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"].includes(value),
  },
});

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};
</script>

<template>
  <div>
    <p
      :class="[
        sizes[props.size],
        props.bold ? 'font-bold' : '',
        props.title ? '' : title.default,
      ]"
    >
      <slot>{{ props.title }}</slot>
    </p>
  </div>
</template>
