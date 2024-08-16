<script>
  import { beforeUpdate, afterUpdate } from 'svelte';
  import { writable } from 'svelte/store';
  import MockDetail from './MockDetail.svelte';

  let detailsAmount = writable(0);
  let lastUpdateTime = writable('');
  let userString = writable("");
  let startTimeRef = 0;
  let interval = 0;

  function startIncrement() {
    interval = setInterval(() => {
      detailsAmount.update(n => n + 1);
    }, 1000);
  }

  function stopIncrement() {
    clearInterval(interval);
  }

  beforeUpdate(() => {
    startTimeRef = performance.now();
  })

  afterUpdate(() => {
    const endTime = performance.now();
    lastUpdateTime.set((endTime - startTimeRef).toFixed(0))
  })

// 
</script>

<div>
  <div class="input">
    <label>
      Details Amount:
      <input type="number" bind:value={$detailsAmount} />
    </label>
    <span>Last update: {$lastUpdateTime ? `${$lastUpdateTime}ms` : "n/a"}</span>
    <br />
    <label>
      Interactive input:
      <input type="text" bind:value={$userString} />
      <span>Result: {$userString}</span>
    </label>
    <br />
    <button on:click={startIncrement}>Start auto increment</button>
    <button on:click={stopIncrement}>Stop auto increment</button>
  </div>

  <div class="details">
    {#each Array($detailsAmount) as _, index}
      <MockDetail {index} />
    {/each}
  </div>
</div>

<style>
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
</style>
