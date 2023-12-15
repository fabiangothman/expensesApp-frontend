import { CacheProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import createCache from '@emotion/cache';
// Import styles
import './App.css';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import DashboardHome from './pages/dashboard/home/DashboardHome';
import Login from './pages/login/Login';
import Layout from './components/layout/Layout';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const App = () => {
  return (
    <CacheProvider value={cache}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<DashboardHome />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CacheProvider>
  )
}

export default App;
