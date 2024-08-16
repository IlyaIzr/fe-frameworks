<script>
  import { writable } from "svelte/store";

  export let index;

  // Randomly choose 'div' or 'span' as the tag
  let tag = Math.random() < 0.5 ? "div" : "span";

  // Generate a random string and initialize click counter
  let randomString = Math.random().toString(36).substring(2, 7);
  let click = writable(0);

  // Compute the title based on random string, index, and click count
  $: title = `${randomString}. Index: ${index}. Clicked ${$click}`;

  // Decide whether to show the child component
  let showChild = Math.random() < 0.2;

  let color = "hotpink";
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Function to remove the detail from the DOM
  function removeDetail() {
    const element = document.querySelector(`[title="${title}"]`);
    element?.remove();
  }

  // Function to handle single clicks
  function handleSingleClick() {
    click.update((n) => n + 1);
  }
</script>

<!-- Conditionally render the 'div' or 'span' with event listeners attached -->
{#if tag === "div"}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={handleSingleClick} on:dblclick={removeDetail} style="background-color:{randomColor}" {title} class="detail">
    {#if showChild}
      <div>{title}</div>
    {/if}
  </div>
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span on:click={handleSingleClick} on:dblclick={removeDetail} style="background-color:{randomColor}" {title} class="detail">
    {#if showChild}
      <div>{title}</div>
    {/if}
  </span>
{/if}

<style>
</style>
