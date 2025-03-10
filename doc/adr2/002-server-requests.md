# ADR-002: Server Requests
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
The application uses a TypeScript Client to perform server calls and leverages SWR for caching, ensuring data consistency, and avoiding duplicate requests. The current hook from the UP tooling, `useApiSwr`, is cumbersome because it requires a configuration object as its first parameter (including a constant `kingAppName`) and forces developers to repeatedly supply the same values. For example:

```typescript
const config: IConfig<CampaignApi, ICampaignDto[]> = {
    api: CampaignApi,
    swrConfig,
    kingAppName: service,
};

const { data, isLoading, error, api, mutate } = useApiSwr<
    CampaignApi,
    ICampaignDto[],
    CampaignFetcherParams
>(config, fetcher, [applicationContext.workspace?.projectId]);
```
This extra boilerplate complicates API call management.

## Decision
- **Custom hook:** Develop a custom hook that wraps the existing `useApiSwr`. This wrapper will automatically include constant configuration values (such as `kingAppName`), reducing boilerplate and simplifying the API call process. Developers will only need to provide the minimal, variable parameters specific to each request.

## Consequences
- **👍🏻 Pros:**
  - **Simplified API Calls:** Automatically manages constant configuration, streamlining the developer experience.
  - **Efficient data handling:** SWR integration continues to provide caching and prevent duplicate requests.
  - **Centralized Enhancements:** Future improvements (e.g., error handling, logging) can be incorporated into the wrapper.
- **👎🏻 Cons:**
  - **Initial development overhead:** Creating and maintaining the custom hook requires upfront effort and ongoing updates if underlying libraries change.
  - **Abstraction risk:** Developers need to understand the wrapper to debug issues that may arise from the abstraction layer.