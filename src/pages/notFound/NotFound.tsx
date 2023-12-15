import { useState } from 'react';
import './NotFound.css';

const NotFound = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        NotFound {count}
    </button>
  )
}

export default NotFound;
