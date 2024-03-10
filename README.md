# Shopping Cart Application

This is a shopping cart application built with Next.js and Zustand for state management.

## Thought Process

The application was built with the following steps:

1. Installed the required modules such as Next.js, Zustand.
2. Set up the folder structure as detailed below.
3. Created reusable components and custom hooks.
4. Set up state management for the whole site, including cart store, product store, and category store.
5. Created custom helper functions.
6. Set up styling with CSS, currently using global CSS.
7. Wrote unit tests and end-to-end tests.

## Folder Structure

- `components`: Contains reusable components.
- `pages`: Contains pages such as product listing and product detail.
- `hooks`: Contains reusable custom hooks.
- `stores`: Contains state management for the whole site, such as cart store, product store, and category store.
- `utils`: Contains custom helper functions.
- `styles`: Contains styling CSS, currently global CSS.
- `__tests__`: Contains unit tests.
- `cypress`: Contains end-to-end tests.

## Features

- Product listing and detail pages.
- Shopping cart functionality.
- State management with Zustand.
- All data fetched through proxy from our NextJS app API
- Unit and end-to-end testing.

## Local Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.

## Running Tests

- Run `npm test` to execute the unit tests.
- Run `npm run cypress:open` for cypres end to end tests
