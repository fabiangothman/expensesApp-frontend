import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import SiteSchema from "./pages/site/layouts/schema/SiteSchema";
import Homepage from "./pages/site/home/Homepage";
import About from "./pages/site/about/About";
import SignUp from "./pages/site/auth/signup/SignUp";
import SignIn from "./pages/site/auth/signin/SignIn";
import SiteNotFound from "./pages/site/notfound/SiteNotFound";
import AppSchema from "./pages/app/layouts/schema/AppSchema";
import Dashboard from "./pages/app/dashboard/Dashboard";
import Logout from "./pages/app/auth/logout/Logout";
import AppNotFound from "./pages/app/notfound/SiteNotFound";
// Styles
import './App.css';
import AuthProvider from "./providers/AuthProvider";
import NavProvider from "./providers/NavProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavProvider>
          <Routes>
            <Route path="" element={<SiteSchema />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="*" element={<SiteNotFound />} />
            </Route>
            <Route path="app" element={<AppSchema />}>
              <Route index element={<Dashboard />} />
              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<AppNotFound />} />
            </Route>
          </Routes>
        </NavProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
