# ADR-003: Data Model Management
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
There was an initial proposal to enforce a strict separation between backend DTOs and frontend data models. This approach would have involved transforming data (e.g., converting objects to arrays, timestamps to Date objects, renaming properties) on every API call to adapt to the frontend requirements and protect the frontend from potential backend changes. However, this was dismissed as the default practice because it introduces unnecessary complexity when backend and frontend data contracts are already closely aligned. The team agreed that data transformation should be applied only on-demand, when the frontend requirements dictate a different structure than what is provided by the backend.

## Decision
- **On-Demand data transformation:**  
  - Use backend DTOs directly when they meet the frontend requirements.
  - Apply transformation functions only when a different data structure is necessary (e.g., converting objects to arrays, timestamps to Date objects).
- **Flexibility:**  
  - Maintain the option to introduce additional transformations or modifications as future requirements emerge, without enforcing a full separation by default.

## Consequences
- **👍🏻 Pros:**  
  - **Reduced complexity:** Avoids unnecessary processing and transformation overhead when backend data contracts suffice.
  - **Selective transformation:** Developers can apply transformations only when they add clear value, keeping the data handling process lean.
  - **Flexibility:** Provides room for evolving requirements without the burden of a rigid, all-encompassing data model conversion.

- **👎🏻 Cons:**  
  - **Developer responsibility:** Developers must decide when and where data transformations are necessary, which might lead to inconsistencies if guidelines are not rigorously followed.
  - **Edge cases:** Without a strict default separation, some scenarios might require additional attention to ensure data integrity.