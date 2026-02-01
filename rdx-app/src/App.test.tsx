import { App } from "./App";
import { render, screen } from "@testing-library/react";

test('renders App component', () => {
  // Basic render test to ensure App component mounts without crashing
  render(<App />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});