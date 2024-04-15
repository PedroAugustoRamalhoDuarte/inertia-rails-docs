# Responses

## Creating responses

Creating an Inertia response is simple. You code like a normal rails response, but instead of rendering a template, you
call the `inertia` method on the controller to call inertia renderer.

The renderer accepts two arguments:

- The first is the name of the component that you want to render from within your pages directory (without extension)
- The second argument is an options hash where you can provide props to your components

```ruby

class EventsController < ApplicationController
  def index
    render inertia: "Events/Index", props: {
      events: Event.all,
    }
  end
end
```

## Serializer

Generally you want to serialize the data before passing into props. You can use
any serializer library that you want, in the example will use Active Model Serializers (AMS).

> **Note**
> To ensure that pages load quickly, only return the minimum data required for the page. Also, be aware that all data
> returned from the controllers will be visible client-side, so be sure to omit sensitive information.

::: code-group

```ruby [events_controller.rb]

class EventsController < ApplicationController
  def index
    render inertia: "Events/Index", props: {
      events: serialize(Event.all, each_serializer: EventSerializer),
    }
  end
end
```

```ruby [application_controller.rb]

class ApplicationController < ActionController::Base
  private

  # helper method to make actions more legible
  def serialize(resource, **options)
    ActiveModelSerializers::SerializableResource.new(resource, **options)
  end
end
```

```ruby [event_serializer.rb]

class EventSerializer < ApplicationSerializer
  attributes :id,
             :name
end
```

:::

