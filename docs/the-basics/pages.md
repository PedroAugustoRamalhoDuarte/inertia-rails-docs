# Pages

When building applications using Inertia, each page in your application typically has its own controller / route and a
corresponding JavaScript component. This allows you to retrieve just the data necessary for that page - no API required.

In addition, all the data needed for the page can be retrieved before the page is ever rendered by the browser,
eliminating the need for displaying "loading" states when users visit your application.

## Creating pages

Inertia pages are simply JavaScript components. If you have ever written a Vue, React, or Svelte component, you will
feel right at home. As you can see in the example below, pages receive data from your application's controllers as
props.

::: code-group

```javascript [React]
import Layout from './Layout'
import {Head} from '@inertiajs/react'

export default function Welcome({user}) {
  return (
    <Layout>
      <Head title="Welcome"/>
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
    </Layout>
  )
}
```

```javascript [Vue 3]
<script setup>
  import Layout from './Layout'
  import {Head} from '@inertiajs/vue3'

  defineProps({user: Object})
</script>

<template>
  <Layout>
    <Head title="Welcome"/>
    <h1>Welcome</h1>
    <p>Hello {{user.name}}, welcome to your first Inertia app!</p>
  </Layout>
</template>
```

```javascript [Svelte]
<script>
  import Layout from './Layout.svelte'

  export let user
</script>

<Layout>
  <svelte:head>
    <title>Welcome</title>
  </svelte:head>
  <H1>Welcome</H1>
  <p>Hello {user.name}, welcome to your first Inertia app!</p>
</Layout>
```

:::

Given the page above, you can render the page by returning an Inertia response from a controller or route. In this
example, let's assume this page is stored at `app/frontend/pages/Users/Show.jsx` within a Rails application.

```ruby
class UsersController < ApplicationController
  def show
    user = User.find(params[:id])

    render inertia: 'Users/Show', props: {
      user: user
    }
  end
end
```