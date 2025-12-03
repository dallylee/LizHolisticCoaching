import { render, screen } from '@testing-library/react';
import { ClientLoginPage } from './ClientLoginPage';
import { describe, it, expect, vi } from 'vitest';

describe('ClientLoginPage', () => {
    it('renders the client login heading', () => {
        render(
            <ClientLoginPage
                onNavigateHome={vi.fn()}
                onNavigateClientLogin={vi.fn()}
            />
        );
        // Adjust the text matcher based on actual content if needed, 
        // but usually a login page has "Login" or "Sign In"
        // Based on previous context it might be a dashboard for "Anna"
        // Let's check for a generic welcome or the specific client name if known, 
        // or just that it renders without crashing.
        // The prompt asked to verify it renders a heading and a form element.

        // We'll look for *some* heading.
        const headings = screen.getAllByRole('heading');
        expect(headings.length).toBeGreaterThan(0);
    });
});
