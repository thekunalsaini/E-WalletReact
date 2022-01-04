import { render, screen } from '@testing-library/react';
// import App from './App';
import Login from './components/Login';
import Update from './components/Update';

test('renders learn react link', () => {
  render(<Update />);
  expect(
    screen.queryAllByTestId("[data-testid='update']").innerText
  ).toBeInTheDocument
});


