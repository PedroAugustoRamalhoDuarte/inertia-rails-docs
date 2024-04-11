# Why Inertia for Rails?

This is a very good question and have a big response. For exemplification, we gona use React, but you can choose the
framework that you want;

## Hotwired

The default approach to Rails nowadays is to use Hotwired. Hotwired have the "same" main goal of Inertia that is make
SPAs like application with the productive of full stack application.

But there is a BIG difference. Hotwired try to reduces the usage of Javascript sending HTML instead of JSON over the
wire. Inertia go for the opposite, its create a protocol to use modern javascript framework easily with any backend
sending JSON instead HTML in the following requests.

So, the main difference is the usage of Javascript. And the main question to you is: Do you prefer coding in HTML
and Turbo or prefer using React?

### Why I should use React/Vue/Svelte instead HTML?

- Hotwired is a very new tool, we dont have many tooling nowadays but its getting bigger.
- The ecosystem for tooling, components, content for React is bigger and mature then hotwired.

## Ok, I want to use React with Rails, why I should pick Inertia?

### Rails API + React vs Inertia

Inertia makes you life easier because you don't have to build an API, and you don't have to repeat yourself.

When you are making a Rails API + React, consequently you duplicated some logics of you application. Examples: You have
to create a Context to storage the current_user in frontend, you have to save some data in frontend and other duplicated logics.
With Inertia we based almost everything in backend so in the end you have to write less code

Other thing to consider that when you make a Rails API + React you have two application now, not only one. And this make
the deploy a little bit harder.

#### When to not choose Inertia.js?

The React API + React approach have the vantage to padronize well the communication from backend and frontend, so if you
have many clients for you backend or many different teams working with different applications, maybe Inertia.js it's
not the best choose;