import { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Homepage {count}
    </button>
  )
}

export default Homepage;
