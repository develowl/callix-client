import { Welcome } from '.';
import { render, screen } from '../../../test-utils';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.spacex.com/');
  });
});
