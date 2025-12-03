import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { describe, it, expect, vi } from 'vitest';

describe('Navbar', () => {
    it('renders the brand name', () => {
        render(<Navbar onContactClick={vi.fn()} />);
        expect(screen.getByText(/LM-Method/i)).toBeInTheDocument();
    });

    it('renders the "Meet Liz" navigation link', () => {
        render(<Navbar onContactClick={vi.fn()} />);
        const link = screen.getByRole('link', { name: /Meet Liz/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '#meet-liz');
    });

    it('renders the "Free Consultation" button', () => {
        render(<Navbar onContactClick={vi.fn()} />);
        expect(screen.getByRole('button', { name: /Free Consultation/i })).toBeInTheDocument();
    });
});
