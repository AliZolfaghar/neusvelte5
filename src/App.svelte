<script>
    //@ts-nocheck
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from './lib/Counter.svelte'
    import { os } from '@neutralinojs/lib';
    import NeutralinoCheck from './lib/NeutralinoCheck.svelte';
    import { onMount } from 'svelte';
    import Neutralino from "@neutralinojs/lib";


  let data = $state({});
  let error = $state(null);

  const test = async () => {
    await Neutralino.events.dispatch('myTestEvent', {myData: 'Test data'});
  }; 

  Neutralino.events.on('answer', (e) => {
    console.log(e.detail)
    data = e.detail
  })

  onMount(async () => {
    // await Neutralino.events.dispatch('myTestEvent', {myData: 'Test data'});


    //     const response = await fetch('/api/data');
    //     const result = await response.json();

    //     if (result.success) {
    //     data = result.data;
    //   } else {
    //     error = result.error;
    //   }
  })

</script>   

        <button class="p-4 bg-amber-400" onclick={test}>test</button>

        {data.message}

        <hr> 
        <NeutralinoCheck />


      <div class="card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-3"> Title </h2>
        <p class="text-gray-600 text-justify">
          Tailwind 4
        </p>
      </div>


<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
