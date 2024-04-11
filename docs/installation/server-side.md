# Server-side setup

## Install inertia dependencies

Just add the inertia rails gem to your Gemfile

```ruby
gem "inertia_rails"
```

Then run `bundle install`

## Install a bundler

When we are using modern front-end framework we need to use a bundler to compile our assets. There are two main ways to
do this with the current state of RubyOnRails:

- Using `vite_ruby` (Recommend)
- Using `jsbundling-rails`

### Using vite_ruby

```ruby
gem "vite_rails"
```

- Then run `bundle install`
- Run `bundle exec vite install`

> For more information for `vite_ruby` visit [vite_ruby](https://vite-ruby.netlify.app/guide/#getting-started)




