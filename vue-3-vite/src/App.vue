<template>
  <div>
    <div class="input">
      <label for="input">
        Details Amount:
        <input type="number" id="input" v-model.number="detailsAmount" />
      </label>
      <span>Last update: {{ lastUpdateTime ? `${lastUpdateTime}ms` : "n/a" }}</span>
      <br />
      <label for="stringInput">
        Interactive input:
        <input type="text" id="stringInput" v-model="userString" />
        <span>Result: {{ userString }}</span>
      </label>
      <br />
      <button type="button" @click="startIncrement">Start auto increment</button>
      <button type="button" @click="stopIncrement">Stop auto increment</button>
    </div>

    <div class="details">
      <MockDetail v-for="index in detailsAmount" :key="index" :index="index - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import MockDetail from "./MockDetail.vue";

const detailsAmount = ref(0);
const lastUpdateTime = ref<string | null>(null);
const userString = ref("");
const startTimeRef = ref<number | null>(null);
const interval = ref(0);

function startIncrement() {
  interval.value = setInterval(() => {
    detailsAmount.value++;
  }, 1000);
}

function stopIncrement() {
  clearInterval(interval.value);
}

watch([detailsAmount, userString], async () => {
  startTimeRef.value = performance.now();
  await nextTick(); // Wait for DOM updates to complete

  const endTime = performance.now();
  lastUpdateTime.value = (endTime - startTimeRef.value).toFixed(0); // Measure the time taken for the update
});
</script>
<style>
html {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  background-color: #313131;
  color: #fff2e1;
  width: 100%;
  height: 100%;
}
.input {
  height: 80px;
  width: 100%;
}
.details {
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: calc(100vh - 80px);
  overflow: auto;
  font-size: 4px;
  cursor: pointer;
}
.detail {
  width: 2px;
  height: 2px;
  margin: 10px;
  display: inline-block;
}

/* Add any additional styling here */
</style>

<style>
/* Vue specific */
#app {
  width: 100%;
}
</style>
