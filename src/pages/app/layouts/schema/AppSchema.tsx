import { Outlet } from "react-router-dom";
// Styles
import './AppSchema.css';

const AppSchema = () => {

  return (
    <div className="">
      <p>AppSchema</p>
      <Outlet />
    </div>
  )
}

export default AppSchema;
