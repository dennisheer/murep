<script lang="ts">
  import { Button } from 'carbon-components-svelte';

  let counter = 0;

  function incrementCounter(): void {
    counter += 1;
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<Button on:click={incrementCounter}>Increment</Button>

<span>{counter}</span>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
