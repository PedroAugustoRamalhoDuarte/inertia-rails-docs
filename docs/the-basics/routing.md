# Routing

## Defining routes

When using Inertia, all of your application's routes are defined server-side. This means that you don't need Vue Router
or React Router. Instead, you can simply define default Rails routes and return Inertia responses from those routes.

## Shorthand routes

If you have a page that doesn't need a corresponding controller method, like an "FAQ" or "about" page, you can route
directly to a component via the inertia route helper inside `routes.rb`.

```ruby
inertia "about" => "AboutComponent"
```

## URL in frontend

Rails allow you to generate URLs from named routes. However, you will not have access to those helpers client-side by
default.

But we can use the package [js_from_routes](https://js-from-routes.netlify.app/guide/introduction.html) to generate the routes in the frontend. This package will generate a
JavaScript path helpers and API methods from your Rails routes.

There is an official integration with inertia [@js-from-routes/inertia](https://github.com/ElMassimo/js_from_routes/tree/main/packages/inertia)
