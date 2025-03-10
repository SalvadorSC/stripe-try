# ADR-008: Loading and Suspense Strategy
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
To improve user experience during data fetching, the application requires a robust strategy for handling loading and error states.

## Decision
- **Suspense & ErrorBoundary:** Use React Suspense combined with an ErrorBoundary to manage loading and error states.
- **Wrapper component:** Develop a higher-order component to encapsulate Suspense and ErrorBoundary logic.
- **Future enhancements:** Plan for migration to React 19’s `use` hook once available.

## Consequences
This approach ensures a smooth user experience during asynchronous operations. It introduces additional layers of abstraction, which will need ongoing maintenance.
