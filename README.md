# Stripe Interview Assessment

## Index

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Running Tests](#running-tests)
  - [Running Storybook](#running-storybook)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
- [Architectural Decision Records (ADR)](#architectural-decision-records-adr)
  - [What is an ADR?](#what-is-an-adr)
  - [ADRs in This Project](#adrs-in-this-project)
- [Contact](#contact)

## Overview

This project is a technical assessment for Stripe, developed by **Salvador Sánchez Campos**. It is a React-based web application utilizing modern frontend technologies to demonstrate coding proficiency and project structuring.

## Tech Stack

The project is built with the following technologies:

#### Core Technologies

<code><img alt="Vite" height="40" src="./src/assets/images/vite.svg"></code>
<code><img alt="React" height="40" src="./src/assets/images/react.svg"></code>
<code><img alt="TypeScript" height="40" src="./src/assets/images/Typescript_logo_2020.svg"></code>
<code><img alt="React Router" height="40" src="./src/assets/images/rr_logo_dark.svg"></code>

#### Links

- **[Vite](https://vite.dev/)** - Fast frontend tooling for modern web applications.
- **[React](https://react.dev/)** - Component-based JavaScript library for building UIs.
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed JavaScript for maintainability and scalability.
- **[React Router](https://reactrouter.com/home)** - Declarative routing for React applications.

#### Development & Testing

<code><img alt="Storybook" height="40" src="./src/assets/images/icon-storybook-default.svg"></code>
<code><img alt="React Testing Library" height="40" src="./src/assets/images/rtl_logo.png"></code>
<code><img alt="Vitest" height="40" src="./src/assets/images/logo-shadow.svg"></code>

#### Links

- **[Storybook](https://storybook.js.org/)** - UI component explorer and development environment.
- **[React Testing Library](https://testing-library.com/)** - Testing utilities for verifying UI behavior.
- **[Vitest](https://vitest.dev/)** - Blazing fast unit testing framework.

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

1. **Folder Structure** - Why has it been decided to follow the current conventions.
2. **Styles Management** - Enables isolated component development and documentation.
3. **Using React Testing Library + Vitest** - Ensures reliable UI behavior with fast and lightweight testing.
4. **State Management** - Why if needed, will React Context be used.
   Other ADRs could be written, in reference to server requests, routing, error handling, etc. but were chosen not to due to finite life of this application.

ADRs are stored in a `docs/adr/` directory for reference.

## Contact

For questions please reach out at:

- **Website:** [salvasc.dev](https://salvasc.dev)
- **GitHub:** [SalvadorSC](https://github.com/SalvadorSC)
- **LinkedIn:** [Salvador Sánchez Campos](https://www.linkedin.com/in/salvador-sc/) || [CV](https://www.linkedin.com/in/salvador-sc/overlay/1726479970141/single-media-viewer/?profileId=ACoAAC490U0B4kzM4fRj6AJ9bh_i0-x65Fp--RM)
