import { useState } from 'react';
import { greet } from './utils/greet';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>{greet('React Learner')}</h1>
      <p>A tiny app to practice unit testing.</p>

      <div className="counter">
        <span data-testid="count">Count: {count}</span>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Increment
        </button>
      </div>
    </main>
  );
}

export default App;
