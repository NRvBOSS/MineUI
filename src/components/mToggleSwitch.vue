<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "success", "danger", "warning"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showLabels: {
    type: Boolean,
    default: true,
  },
  onLabel: {
    type: String,
    default: "On",
  },
  offLabel: {
    type: String,
    default: "Off",
  },
});

const emit = defineEmits(["update:modelValue", "change"]);
const isChecked = ref(props.modelValue);

// Sync with external modelValue changes
watch(() => props.modelValue, (newVal) => {
  isChecked.value = newVal;
});

const toggleSwitch = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
    emit("update:modelValue", isChecked.value);
    emit("change", isChecked.value);
  }
};

const switchClasses = computed(() => {
  const base = [
    "relative inline-flex items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    props.disabled ? "cursor-not-allowed opacity-70" : ""
  ];
  
  const sizes = {
    sm: ["w-11 h-6", "w-5 h-5"],
    md: ["w-14 h-7", "w-6 h-6"],
    lg: ["w-16 h-8", "w-7 h-7"],
  };
  
  const colors = {
    primary: [
      isChecked.value ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600",
      "focus:ring-blue-500"
    ],
    secondary: [
      isChecked.value ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600",
      "focus:ring-purple-500"
    ],
    success: [
      isChecked.value ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600",
      "focus:ring-green-500"
    ],
    danger: [
      isChecked.value ? "bg-red-600" : "bg-gray-300 dark:bg-gray-600",
      "focus:ring-red-500"
    ],
    warning: [
      isChecked.value ? "bg-yellow-500" : "bg-gray-300 dark:bg-gray-600",
      "focus:ring-yellow-500"
    ],
  };
  
  return [
    ...base,
    ...sizes[props.size].slice(0, 1),
    ...colors[props.color],
  ].join(" ");
});

const knobClasses = computed(() => {
  const sizes = {
    sm: ["w-5 h-5", "translate-x-5"],
    md: ["w-6 h-6", "translate-x-7"],
    lg: ["w-7 h-7", "translate-x-8"],
  };
  
  return [
    "inline-block bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out",
    sizes[props.size][0],
    isChecked.value ? sizes[props.size][1] : "translate-x-1",
    props.disabled ? "bg-gray-100" : ""
  ].join(" ");
});

const labelClasses = computed(() => [
  "text-sm font-medium",
  props.disabled ? "text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-300",
  props.size === "sm" ? "text-xs" : ""
]);
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      type="button"
      :class="switchClasses"
      @click="toggleSwitch"
      :disabled="disabled"
      :aria-checked="isChecked"
      role="switch"
      :aria-label="isChecked ? onLabel : offLabel"
    >
      <span :class="knobClasses" />
    </button>
    
    <template v-if="showLabels">
      <span 
        v-if="isChecked" 
        :class="labelClasses"
        class="font-medium"
      >
        {{ onLabel }}
      </span>
      <span 
        v-else 
        :class="labelClasses"
        class="font-medium"
      >
        {{ offLabel }}
      </span>
    </template>
  </div>
</template>