import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Login {count}
    </button>
  )
}

export default Login;
