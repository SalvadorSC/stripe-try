# ADR-011: Git Branching Strategy (No GitFlow)
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
The team is get used to work with a streamlined branching strategy and has decided against using the GitFlow model. In past projects, the team has maintained a single "main" branch from which feature branches are created. Changes are tested in a non-production environment and then merged back into "main". Once merged, the changes can be released directly to Live. This approach has proven effective in keeping the development process simple, reducing overhead, and aligning with the team's workflow preferences.

## Decision
- **Single main branch:** Use one main branch as the source of truth.
- **Feature branches:** Developers create feature branches off of "main" for new work.
- **Testing environment:** Changes from feature branches are deployed to a non-production environment for validation.
- **Direct merges:** Once testing is completed and validated in the non-production environment, feature branches are merged directly back into "main".
- **Immediate releases:** After merging into "main", changes can be released to the Live environment without an intermediate staging branch, as the non-production environment serves as the testing ground.

## Consequences
- **👍🏻 Pros:**
  - **Simplicity:** Reduces the complexity of managing multiple long-lived branches, making the workflow easier to understand and maintain.
  - **Agility:** Enables faster integration and deployment cycles by minimizing delays associated with additional branch merges.
  - **Team alignment:** Leverages the team's familiarity with this approach, ensuring higher productivity and fewer mistakes during the merge and release process.
- **👎🏻 Cons:**
  - **Risk management:** Without an intermediate staging branch, the team must ensure rigorous testing in the non-production environment to avoid potential issues in Live.
  - **Limited isolation:** In cases where multiple features are developed simultaneously, careful coordination is needed to prevent integration issues.
  - **Scalability:** As the project grows, the team may need to revisit the branching strategy to address increasing complexity.
