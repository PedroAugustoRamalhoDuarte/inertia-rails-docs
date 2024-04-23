# Shared data

Sometimes you need to access specific pieces of data on numerous pages within your application. For example, you may
need to display the current user in the site header. Passing this data manually in each response across your entire
application is cumbersome. Thankfully, there is a better option: shared data.

## Sharing Data

Think in sharing data like a `before_action` that we set the data to use in our components. We do this inside our
controllers using `inertia_share` function.

```ruby

class ApplicationController < ActionBase::Controller
  # share syncronously
  inertia_share app_name: ENV["APP_NAME"]

  # share lazily, evaluated at render time
  inertia_share do
    {
      currentUser: Current.user
    }
  end

  # share lazily alternate syntax
  inertia_share currentUser: -> { Current.user }

end
```

## Accessing shared data

Once you have shared the data server-side, you will be able to access it within any of your pages or components. Here's
an example of how to access shared data in a layout component.

::: code-group

```javascript [React]
import {usePage} from "@inertiajs/react"

const Layout = ({children}) => {
  const {currentUser} = usePage().props

  return (
    <main>
      <header>
        You are logged in as: {currentUser.name}
      </header>
      <content>
        {children}
      </content>
    </main>
  )
}

export default Layout;
```

```javascript [Vue]
<script setup>
  import {computed} from 'vue'
  import {usePage} from '@inertiajs/vue3'

  const page = usePage()

  const currentUser = computed(() => page.props.currentUser)
</script>

<template>
  <main>
    <header>
      You are logged in as: {{currentUser.name}}
    </header>
    <content>
      <slot/>
    </content>
  </main>
</template>
```

```javascript [Svelte]
<script>
  import {page} from '@inertiajs/svelte'
</script>

<main>
  <header>
    You are logged in as: {$page.props.currentUser.name}
  </header>
  <content>
    <slot/>
  </content>
</main>
```

:::

## Deep Merging Shared Data

By default, Inertia will shallow merge data defined in an action with the shared data. You might want a deep merge.
Imagine using shared data to represent defaults you'll override sometimes.

```ruby

class ApplicationController
  inertia_share do
    { basketball_data: { points: 50, rebounds: 100 } }
  end
end
```

Let's say we want a particular action to change only part of that data structure. The renderer accepts a deep_merge
option:

```ruby

class CrazyScorersController < ApplicationController
  def index
    render inertia: 'CrazyScorersComponent',
           props: { basketball_data: { points: 100 } },
           deep_merge: true
  end
end

# The renderer will send this to the frontend:
{
  basketball_data: {
    points: 100,
    rebounds: 100,
  }
}
```

Deep merging can be set as the project wide default via the InertiaRails configuration:

```ruby
# config/initializers/inertia.rb
InertiaRails.configure do |config|
  config.deep_merge_shared_data = true
end
```

If deep merging is enabled by default, it's possible to opt out within the action, using `deep_merge: false` as render
parameter.