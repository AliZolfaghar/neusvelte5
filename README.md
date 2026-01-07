# neusvelte5
svelte 5 + Neutralinojs


1) install neutralinojs
npm install -g @neutralinojs/neu

neu --version

2) create neutralinojs app 
neu create app

3) npm create vite@latest

4) npm install @tailwindcss/vite

5) change vite.config.js 
    // vite.config.js
    import { defineConfig } from 'vite'
    import { svelte } from '@sveltejs/vite-plugin-svelte'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
        plugins: [
            tailwindcss(),
            svelte()
        ]
    })

6) tailwind.config.js
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [],
    }


7) add tailwind to src/app.css 
    /* src/app.css */
    @import 'tailwindcss';

8) test :
add to App.svelte
      <div class="card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-3"> Title </h2>
        <p class="text-gray-600 text-justify">
          Tailwind 4
        </p>
      </div>

<!-- 9) copy neutralino from /app/resources/js to /app/frontend/public/js
    and rename mail.js to neutralino_app.js

10) add this to 
    <script src="/js/neutralino.js"></script>
    <!-- Your app's source files -->
    <script src="/js/main.js"></script>       -->








# neutralinojs-minimal

The default template for a Neutralinojs app. It's possible to use your favorite frontend framework by using [these steps](https://neutralino.js.org/docs/getting-started/using-frontend-libraries).

## Contributors

[![Contributors](https://contrib.rocks/image?repo=neutralinojs/neutralinojs-minimal)](https://github.com/neutralinojs/neutralinojs-minimal/graphs/contributors)

## License

[MIT](LICENSE)

## Icon credits

- `trayIcon.png` - Made by [Freepik](https://www.freepik.com) and downloaded from [Flaticon](https://www.flaticon.com)
