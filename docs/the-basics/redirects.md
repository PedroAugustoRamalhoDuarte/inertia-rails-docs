# Redirects

## Creating responses

When making a non-GET Inertia request manually or via a `<Link>` element, you should ensure that you always respond with
a
proper Inertia redirect response.

For example, if your controller is creating a new user, your "store" endpoint should return a redirect back to a
standard `GET` endpoint, such as your user "index" page. Inertia will automatically follow this redirect and update the
page accordingly.

```ruby

class EventsController < ApplicationController
  def index
    render inertia: "Events/Index", props: {
      events: Event.all,
    }
  end

  def create
    Event.create!(event_params)

    redirect_to events_path
  end
end
```

## 303 response code

When redirecting after a `PUT`, `PATCH`, or `DELETE` request, you must use a `303` response code, otherwise the
subsequent
request will not be treated as a `GET` request. A `303` redirect is very similar to a `302` redirect; however, the
follow-up
request is explicitly changed to a `GET` request.

If you're using one of our official server-side adapters, all redirects will automatically be converted to `303`
redirects.

## External redirects

Sometimes it's necessary to redirect to an external website, or even another non-Inertia endpoint in your app while
handling an Inertia request. This can be accomplished using a server-side initiated `window.location` visit via the
`inertia_location` method.

```ruby

class EventsController < ApplicationController
  def create
    Event.create!(event_params)

    inertia_location(events_path)
  end
end
```

The `inertia_location` method will generate a `409 Conflict` response and include the destination URL in the
`X-Inertia-Location` header. When this response is received client-side, Inertia will automatically perform a
`window.location = url` visit.