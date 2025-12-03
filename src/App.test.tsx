import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
    it('renders the LM-Method brand name', () => {
        render(<App />);
        // Check for brand name in Navbar
        const brandElements = screen.getAllByText(/LM-Method/i);
        expect(brandElements.length).toBeGreaterThan(0);
    });

    it('renders the "Meet Liz" navigation link', () => {
        render(<App />);
        const meetLink = screen.getByRole('link', { name: /Meet Liz/i });
        expect(meetLink).toBeInTheDocument();
    });

    it('renders the main hero call to action', () => {
        render(<App />);
        const ctaButton = screen.getByRole('button', { name: /Start Your Free Chat/i });
        expect(ctaButton).toBeInTheDocument();
    });
});
