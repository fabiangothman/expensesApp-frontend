import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Home {count}
    </button>
  )
}

export default Home;
