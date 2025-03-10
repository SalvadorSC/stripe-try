# ADR-009: Linters and Code Formatting
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
Consistency in code style is essential for collaboration and code quality. The project already incorporates ESLint and Stylelint from the UP tooling, but some Prettier configurations need customization.

## Decision
- **Linting tools:** Continue using ESLint and Stylelint from the UP tooling.
- **Prettier configuration:** Adjust Prettier settings as follows:
  - `printWidth`: 120
  - `tabWidth`: 4
  - `singleQuote`: true
  - `trailingComma`: none

## Consequences
This configuration enforces a consistent code style across the project, which facilitates code reviews and collaboration. Developers must adhere to these settings to maintain code quality.
