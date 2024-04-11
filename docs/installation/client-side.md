# Client-side setup

Before starting, you need to choose

## Install dependencies

First, install the Inertia client-side adapter corresponding to your framework of choice.

::: code-group

```sh [React]
$ yarn add @inertiajs/react react react-dom
```

```sh [Vue 3]
$ yarn add @inertiajs/vue3
```

```sh [Svelte]
$ yarn add @inertiajs/svelte
```

:::

## Initialize the Inertia app

Next, update your main JavaScript file to boot your Inertia app. To accomplish this, we'll initialize the client-side
framework with the base Inertia component.

Place the above content in your `app/frontend/entrypoints/inertia.jsx`. And after that import this file inside
application.js

::: code-group

```javascript [React]
import React from 'react';
import {createInertiaApp} from '@inertiajs/react'
import {createRoot} from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx', {eager: true})
    return pages[`./pages/${name}.jsx`]
  },
  setup({el, App, props}) {
    const container = document.getElementById(el.id);
    const root = createRoot(container);
    root.render(<App {...props} />);
  },
})
```

```javascript [Vue 3]
import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.vue', {eager: true})
    return pages[`./pages/${name}.vue`]
  },
  setup({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .mount(el)
  },
})
```

```javascript [Svelte]
import {createInertiaApp} from '@inertiajs/svelte'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.svelte', {eager: true})
    return pages[`./pages/${name}.svelte`]
  },
  setup({el, App, props}) {
    new App({target: el, props})
  },
})
```

:::

## Resolving components

The resolve callback tells Inertia how to load a page component. It receives a page name (string), and returns a page
component module.
In the examples above, we use the vite syntax, if you are using webpack or another bundler, you may need to adjust the
glob pattern.

By default, we recommend eager loading your components, which will result in a single JavaScript bundle. However, if
you'd like to lazy-load your components, see our code splitting documentation.