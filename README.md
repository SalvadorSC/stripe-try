# Stripe Interview Assessment

## Overview

This project is a technical assessment for Stripe, developed by **Salvador Sánchez Campos**. It is a React-based web application utilizing modern frontend technologies to demonstrate coding proficiency and project structuring.

## Tech Stack

The project is built with the following technologies:

| Technology                                                | Description                                                    | Logo                                                              |
| --------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **[Vite](https://vite.dev/)**                             | Fast frontend tooling for modern web applications.             | ![Vite Logo](./vite.svg)                                          |
| **[React](https://react.dev/)**                           | Component-based JavaScript library for building UIs.           | ![React Logo](./src/assets/images/react.svg)                      |
| **[TypeScript](https://www.typescriptlang.org/)**         | Strongly typed JavaScript for maintainability and scalability. | ![TypeScript Logo](./src/assets/images/Typescript_logo_2020.svg)  |
| **[React Router](https://reactrouter.com/home)**          | Declarative routing for React applications.                    | ![React Router Logo](./src/assets/images/react-router_logo.svg)   |
| **[Storybook](https://storybook.js.org/)**                | UI component explorer and development environment.             | ![Storybook Logo](./src/assets/images/icon-storybook-default.svg) |
| **[React Testing Library](https://testing-library.com/)** | Testing utilities for verifying UI behavior.                   | ![RTL Logo](./src/assets/images/rtl_logo.png)                     |
| **[Vitest](https://vitest.dev/)**                         | Blazing fast unit testing framework.                           | ![Vitest Logo](./src/assets/images/logo-shadow.svg)               |

## Features

- Responsive design with dark and light theme support.
- Component-driven architecture.
- Storybook for isolated component development.
- Unit and integration testing with Vitest and React Testing Library.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (LTS version recommended)
- **[Yarn](https://yarnpkg.com/)** or npm

### Installation

Clone the repository and install dependencies:

```sh
 git clone https://github.com/SalvadorSC/stripe-try.git
 cd stripe-try
 npm install  # or yarn install
```

### Running the Project

To start the development server:

```sh
npm run dev  # or yarn dev # or npm start # or yarn start
```

Open the application in your browser at `http://localhost:5173/` (default Vite port).

### Running Tests

To execute unit and integration tests:

```sh
npm run test  # or yarn test
```

### Running Storybook

To view components in isolation:

```sh
npm run storybook  # or yarn storybook
```

### Building for Production

To create a production build:

```sh
npm run build  # or yarn build
```

### Previewing the Production Build

To preview the production build locally:

```sh
npm run preview  # or yarn preview
```

## Architectural Decision Records (ADR)

### What is an ADR?

An **Architectural Decision Record (ADR)** is a structured document that captures important architectural decisions, along with their context and consequences. This helps maintain clarity in project evolution.

### ADRs in This Project

This project follows ADRs to document major technical choices. Key decisions include:

1. **Choosing Vite over CRA** - Vite provides better performance and a modern development experience.
2. **Using Storybook for UI Component Development** - Enables isolated component development and documentation.
3. **Using React Testing Library + Vitest** - Ensures reliable UI behavior with fast and lightweight testing.

ADRs are stored in a `docs/adr/` directory for reference.

## Contact

For questions please reach out at:

- **Website:** [salvasc.dev](https://salvasc.dev)
- **GitHub:** [SalvadorSC](https://github.com/SalvadorSC)
