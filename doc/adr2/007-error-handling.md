# ADR-007: Error Handling
**Created:** 2025-02-27  
**Updated:** 2025-02-27  

## Status
✅ Accepted

## Context
The application must handle errors gracefully and consistently. Backend and frontend errors are shared via a common TS client API exceptions mechanism, even when responses return with HTTP 200.

## Decision
Implement error handling using shared client API exceptions. This ensures that error messages are consistently managed and that the frontend is not directly coupled to the backend error structure.

**Example:**
```typescript
update(formValues).then(() => {
    message.success('Success!');
}).catch((error) => {
    if(error instanceof FormValidationException) {
        message.error('Form validation errors. Please review');
    }
    else {
        message.error('Price could not be created. Please try again.');
    }
});
```

## Consequences
This provides a standardized approach to error management, promoting consistency across the application. However, it requires careful coordination between backend and frontend error definitions.
