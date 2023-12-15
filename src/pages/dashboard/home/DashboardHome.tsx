import { useState } from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        DashboardHome {count}
    </button>
  )
}

export default DashboardHome;
