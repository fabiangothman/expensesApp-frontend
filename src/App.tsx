import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import styles
import './App.css';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import DashboardHome from './pages/dashboard/home/DashboardHome';
import Login from './pages/login/Login';
import Layout from './components/layout/Layout';
import SiteSchema from "./pages/site/layouts/schema/SiteSchema";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path="/app" element={<SiteSchema />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashboardHome />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
