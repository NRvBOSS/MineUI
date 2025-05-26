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
    default: '',
  },
  bordered: {
    type: Boolean,
    default: false,
  }
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

const inputClasses = computed(() => [
    props.bordered ? "border border-gray-300 rounded-lg" : props.default,
    props.placeholder ? "p-2" : props.placeholder.default
].join(" "))
</script>

<template>
  <input :placeholder="placeholder" :class="`${inputClasses} ${sizes[size]} ${types[type]}`">
  <slot />
  </input>
</template>
