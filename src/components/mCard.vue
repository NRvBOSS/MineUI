<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  linkText: {
    type: String,
    default: "Detayları Gör",
  },
  variant: {
    type: String,
    default: "primary", // 'primary', 'secondary', 'minimal'
    validator: (value) => ["primary", "secondary", "minimal"].includes(value),
  },
});

const hasImage = computed(() => props.image.trim() !== "");
const hasTitle = computed(() => props.title.trim() !== "");
const hasContent = computed(() => props.content.trim() !== "");
const hasLink = computed(() => props.link.trim() !== "");

const handleClick = () => {
  if (hasLink.value) {
    window.open(props.link, "_blank");
  }
};

const variantClasses = computed(() => {
  const base = "rounded-xl overflow-hidden shadow-md transition-all duration-300";
  
  const variants = {
    primary: "bg-white dark:bg-gray-800 hover:shadow-lg",
    secondary: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600",
    minimal: "bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50",
  };
  
  return `${base} ${variants[props.variant]}`;
});

const linkClasses = computed(() => {
  const base = "mt-2 inline-flex items-center font-medium transition-colors";
  
  const variants = {
    primary: "text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300",
    secondary: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    minimal: "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",
  };
  
  return `${base} ${variants[props.variant]}`;
});
</script>

<template>
  <div
    :class="variantClasses"
    role="article"
    @click="handleClick"
    :tabindex="hasLink ? '0' : undefined"
    :aria-label="hasTitle ? title : 'Kart'"
    class="group cursor-default flex flex-col"
  >
    <!-- Resim alanı -->
    <div v-if="hasImage" class="relative h-48 w-full overflow-hidden">
      <img
        :src="image"
        :alt="title || 'Kart resmi'"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>

    <!-- İçerik alanı -->
    <div :class="{'p-6': hasImage, 'p-4': !hasImage}" class="flex flex-col flex-grow">
      <h3
        v-if="hasTitle"
        class="text-xl font-bold mb-2 text-gray-900 dark:text-white"
      >
        {{ title }}
      </h3>
      
      <p
        v-if="hasContent"
        class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
      >
        {{ content }}
      </p>
      
      <a
        v-if="hasLink"
        :class="linkClasses"
        @click.stop="handleClick"
      >
        {{ linkText }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </div>
</template>