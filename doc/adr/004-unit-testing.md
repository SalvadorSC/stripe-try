# ADR-006: Unit Testing

**Created:** 2025-03-10  
**Updated:** 2025-03-10

## Status

✅ Accepted || ⚠️ Pending || ‼️ Declined || 🕐 In Progress

## Context

Maintaining high code quality is crucial. The team prefers using React Testing Library for component testing<!--  and plans to use MSW for API mocking as recommended by SWR. -->

## Decision

- **Testing tools:** Use React Testing Library for component tests.
- **Mocking strategy:** Initially, mock <!-- domain hooks --> to provide the required data. <!-- This approach will be reviewed for potential integration of MSW in future iterations. -->

## Consequences

This strategy allows for rapid development and testing while ensuring reliable test outcomes. The chosen approach may be revisited to incorporate more robust endpoint mocking as the project evolves.
