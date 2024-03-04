import { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Dashboard {count}
    </button>
  )
}

export default Dashboard;
