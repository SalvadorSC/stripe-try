# ADR-001: Folder Structure

**Created:** 2025-03-10
**Updated:** 2025-03-10

## Status

✅ Accepted || ⚠️ Pending || ‼️ Declined || 🕐 In Progress

## Context

Due to the short nature of this application and to ensure simplicity and reliability (from the developer), this application needs a easy to understand and code way of styling.

## Decision

After considering some alternatives such as TailwindCSS, SCSS, or similar options such as Bootstrap, CSS has been chosen as it's the most straightforward anyone can apply styles that are understood by everyone, including possible extra Stripes in the interview.

## Consequences

Stylings will be handled by component with an exception to stylings of the interview application itself.
Any color, spacing or similar variables will be put in the variables.css file in the src root folder for easy access to all components.
