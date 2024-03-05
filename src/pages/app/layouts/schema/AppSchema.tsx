import { Outlet } from "react-router-dom";
// Styles
import './AppSchema.css';
import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";
import { useAuth } from "../../../../providers/AuthProvider";

const AppSchema = () => {
  
  const auth = useAuth();
  console.log(`AppSchema auth: `, auth);
  // Redirect to site if no auth

  return (
    <div className="">
      <AppHeader></AppHeader>
      <Outlet />
      <AppFooter></AppFooter>
    </div>
  )
}

export default AppSchema;
