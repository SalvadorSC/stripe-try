# ADR-005: Routing
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
For an application of this size, managing routes in a single file is sufficient and will simplify route management.

## Decision
All routes will be consolidated in a single file (e.g., `routes.ts`) located in the `pages/` directory.

## Consequences
This centralization simplifies the overview of route definitions. As the application grows, the routing strategy might need to be revisited to maintain clarity and manageability.
