<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>

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
  <h1 class="text-gray-900 dark:text-white">
    پشتیبانی از حالت تاریک
  </h1>
</div>

<Counter />
