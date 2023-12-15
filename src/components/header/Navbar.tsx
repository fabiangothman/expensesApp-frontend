import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Navbar {count}
    </button>
  )
}

export default Navbar;
