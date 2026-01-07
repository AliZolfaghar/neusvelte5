<script>
    //@ts-nocheck
    import svelteLogo from "./assets/svelte.svg";
    import viteLogo from "/vite.svg";
    import Counter from "./lib/Counter.svelte";
    import { onMount } from "svelte";

    // recive data from neutralino 
    let receivedData = $state(null);


    onMount( async () => {
        console.log("App mounted", Neutralino);
        
        // listen to event 
        await Neutralino.events.on('svelteData', (evt) => {
            receivedData = evt.detail;
            console.log('Data received:', receivedData);
        });

        // clean up    
        return () => {
            Neutralino.events.off('svelteData');
        };

    });
</script>

<div>
  {#if receivedData}
    <p>{receivedData.message}</p>
  {/if}
</div>

<hr>
<div
    class="card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
>
    <h2 class="text-xl font-semibold text-gray-800 mb-3">Title</h2>
    <p class="text-gray-600 text-justify">Tailwind 4</p>
</div>

<div dir="rtl" class="text-right">
    <h1 class="text-2xl font-bold">عنوان فارسی</h1>
    <p class="mt-4">این یک متن تست فارسی است</p>
</div>

<div class="bg-white dark:bg-gray-900">
    <h1 class="text-gray-900 dark:text-white">پشتیبانی از حالت تاریک</h1>
</div>

<Counter />
<div id="info"></div>
<hr />
