import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SkipToMainLink from './SkipToMainLink';

beforeEach(() => {
  render(<SkipToMainLink />);
});

describe('SkipToMainLink', () => {
  it('renders a link to skip to the main content', () => {
    const link = screen.getByRole('link', { name: 'Skip to main content' });
    expect(link).toHaveAttribute('href', '#main');
    expect(link).toBeInTheDocument();
  });
});