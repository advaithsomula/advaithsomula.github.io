<template>
  <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
    <div
      class="relative flex py-5 items-center"
      :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']"
    >
      <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
    </div>
    <div
      class="grid lg:grid-cols-2 gap-6 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300"
    >
      <!-- Text Section -->
      <div class="order-2 lg:order-none px-4 lg:px-0">
        <p v-for="paragraph in content.autobiography" :key="paragraph" class="leading-relaxed mb-4">
          {{ paragraph }}
        </p>
        <div>
          <p class="pb-3 font-semibold">Most Recent Tech ROS2...</p>
          <ul class="grid grid-cols-2 gap-x-4 gap-y-2 list-['\2705']">
            <li v-for="tech in content.techStack" :key="tech" class="pl-2">{{ tech }}</li>
          </ul>
        </div>
      </div>

      <!-- Images Section -->
      <div class="grid grid-rows-3 gap-y-4 order-1 lg:order-none">
        <div class="w-full">
          <img
            :src="getImageUrl(content.photo1Link)"
            class="shadow-md rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div class="w-full">
          <img
            :src="getImageUrl(content.photo2Link)"
            class="shadow-md rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div class="w-full">
          <img
            :src="getImageUrl(content.photo3Link)"
            class="shadow-md rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
  content: Object,
  transitions: Object,
});

const aboutSection = ref({});
const visible =
  props.transitions.active &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(aboutSection, !!props.transitions.showOnce, {
        threshold: props.transitions.thresholdOption,
      })
    : true;

// Static Images
const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}

section {
  padding-bottom: 2rem;
}
</style>
