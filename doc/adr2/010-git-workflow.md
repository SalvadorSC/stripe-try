# ADR-010: Git Workflow
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
A clear and consistent Git workflow is vital for collaboration and maintaining a clean commit history. The team has previous experience in another project where individual commits were preferred over squash & merge. In that project, developers committed changes incrementally, ensuring that each commit message adhered to conventional commit standards. This workflow proved effective for tracing changes and debugging historical issues.

## Decision
- **Commit conventions:** Adopt Conventional Commits for all commit messages. Each commit must include the proper suffix to indicate the type of change (e.g., `feat`, `fix`, `chore`, etc.).
- **Flexible merge strategy:** Developers are free to choose their preferred commit strategy. Whether opting for individual commits or squash & merge, the key requirement is that commit messages follow the Conventional Commit format. This flexibility recognizes the team's diverse workflows while maintaining a standardized approach to commit messaging.
- **README generation:** Use automatic README generation tools to ensure documentation is always up-to-date.

## Consequences
This strategy results in a clean and understandable commit history, improving collaboration and easing future maintenance. It does require discipline in following the commit guidelines.
