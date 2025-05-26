<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: "md",
    validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value),
  },
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "email", "password", "number", "tel", "url", "search"].includes(
        value
      ),
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const sizes = computed(() => ({
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}));

const types = computed(() =>
({
    text: "text",
    email: "email",
    password: "password",
    number: "number",
    tel: "tel",
    url: "url",
    search: "search",
}))
</script>

<template>
  <input :class="` ${sizes[size]} ${types[type]}`">
  <slot />
  </input>
</template>
