<!-- src/components/MockDetail.vue -->
<template>
  <component :is="tag" @dblclick="removeDetail" :style="detailStyle" :title="title">
    <div v-if="showChild">{{ title }}</div>
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  index: Number
});

const tag = ref(Math.random() < 0.5 ? 'div' : 'span');
const randomString = Math.random().toString(36).substring(2, 7);
const title = ref(`${randomString}. Index: ${props.index}`);

const detailStyle = ref({
  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  minWidth: '2px',
  minHeight: '2px',
});

const showChild = ref(Math.random() < 0.2);

const removeDetail = () => {
  // Removing element from DOM
  const element = document.querySelector(`[title="${title.value}"]`);
  element?.remove();
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
