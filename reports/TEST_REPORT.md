# Test Report

## Overview
This project uses **Vitest** as the test runner and **React Testing Library** for component testing. **ESLint** is configured for linting.

## Tools
- **Vitest**: A blazing fast unit test framework powered by Vite.
- **React Testing Library**: Simple and complete testing utilities that encourage good testing practices.
- **ESLint**: Pluggable JavaScript linter.

## Commands
- `npm test`: Run tests once.
- `npm run test:watch`: Run tests in watch mode.
- `npm run test:coverage`: Run tests and generate coverage report.
- `npm run lint:eslint`: Run ESLint check.

## Current Tests
- **App**: Verifies branding ("LM-Method"), navigation links ("Meet Liz"), and hero CTA.
- **Navbar**: Verifies brand name, navigation links, and "Free Consultation" button.
- **ClientLoginPage**: Verifies the presence of a heading.

## CI Integration
Tests are automatically run in GitHub Actions on push and pull request events.
