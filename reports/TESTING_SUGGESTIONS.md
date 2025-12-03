# Testing Suggestions

## Future Improvements

1.  **Component Testing**:
    - Add tests for `Hero`, `MeetEnes` (Meet Liz), and `Footer` components to verify content updates.
    - Test interactive elements like buttons and form inputs.

2.  **Integration Testing**:
    - Test navigation flows between pages (e.g., clicking "Meet Liz" scrolls to the section).
    - Test the client login flow (mocking authentication).

3.  **Accessibility Testing**:
    - Use `jest-axe` to automatically check for accessibility violations in tests.

4.  **E2E Testing**:
    - Consider adding Playwright or Cypress for end-to-end testing of critical user journeys.

5.  **Linting**:
    - Address existing lint warnings/errors to enable strict linting in CI.
    - Add `prettier` check to CI.
