import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { greet } from './utils/greet';

describe('greet utility', () => {
  it('returns a personalized greeting when a name is provided', () => {
    expect(greet('Alex')).toBe('Hello, Alex!');
  });

  it('returns a default greeting when the name is empty', () => {
    expect(greet('')).toBe('Hello, stranger!');
  });
});

describe('App component', () => {
  it('renders the greeting and starts the counter at zero', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /hello, react learner/i })).toBeInTheDocument();
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
  });

  it('increments the counter when the button is clicked', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
  });
});
