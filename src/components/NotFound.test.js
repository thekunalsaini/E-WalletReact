import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('renders NotFound', () => {
  render(<NotFound />);
  
  //expect(linkElement).toBeInTheDocument();
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'https://www.webfx.com/wp-content/uploads/2021/10/26-13_error_page_chrisjennings.jpg');
    expect(logo).toHaveAttribute('alt', 'Page Not Found 404');
});


