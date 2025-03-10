# ADR-001: Folder Structure
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
The project is a React + TypeScript application. A clear folder structure has been proposed to separate concerns such as API calls, assets, components, hooks, contexts, pages, utilities, app-level code, and styles. This structure aims to facilitate maintainability, scalability, and collaboration.

## Decision
Adopt the following folder structure with a standardized layout for each module type:
- **api:**  
  - Contains domain entities and server logic (e.g., `useSku.ts`, `useSkus.ts`).
  - Each feature (e.g., "skus") includes supporting files: `types.ts`, `transformers.ts`, `constants.ts`, `utils.ts`, and a dedicated `__tests__` folder.

- **assets:**  
  - Stores media (fonts, images, etc.), organized by type.

- **components:**  
  - Reusable UI elements (e.g., `RangeFilter`) with:
    - Main component file (e.g., `RangeFilter.tsx`).
    - Scoped styling (e.g., `RangeFilter.module.scss`).
    - Supporting files: `types.ts`, `constants.ts`, `utils.ts`.
    - A `__tests__` folder for tests.

- **hooks:**  
  - Custom React hooks (e.g., `useCurrentBranch`) following a similar pattern:
    - Main hook file, along with `types.ts`, `constants.ts`, `utils.ts`, and tests in `__tests__`.

- **contexts:**  
  - Global state management providers (e.g., `RootContext`, `AuthContext`) with their own component, types, constants, utils, and tests.

- **pages:**  
  - Feature views (e.g., SKU pages) with a similar structure to components.
  - Pages may include nested sub-components (e.g., `SKUTable`, `SKUFilter`) as needed.

- **utils:**  
  - General-purpose utilities (e.g., analytics, datetime, sort) and shared test helpers, each with its own `__tests__`.

- **app:**  
  - Root application component and related styling/tests.

- **styles:**  
  - Global style files (e.g., `index.scss`).

- **__mocks__:**  
  - Mock implementations for testing.

## Consequences
This structure promotes modularity and clarity. It may require additional initial setup, but it will significantly improve maintainability and streamline onboarding for new team members.

- **Modularity:** Each feature is self-contained, reducing redundancy and easing future changes.
- **Consistency:** Standardized files (component/hook/main file, types, constants, utils, tests) help reduce onboarding time and improve collaboration.
- **Scalability:** The structure scales from simple components to complex features without overcomplication.

