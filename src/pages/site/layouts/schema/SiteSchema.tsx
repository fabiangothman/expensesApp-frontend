import { FC } from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "../header/SiteHeader";
import SiteFooter from "../footer/SiteFooter";
import { useAuth } from "../../../../providers/AuthProvider";
import { useNav } from "../../../../providers/NavProvider";
// Styles
import './SiteSchema.css';

const SiteSchema: FC = () => {
  const { user, session } = useAuth();
  const { siteMenu } = useNav();
  console.log(`SiteSchema auth: `, user);
  console.log(`SiteSchema session: `, session);
  console.log(`SiteSchema siteMenu: `, siteMenu);

  return (
    <div className="">
      <SiteHeader primaryMenu={siteMenu.primary}></SiteHeader>
      <Outlet />
      <SiteFooter></SiteFooter>
    </div>
  )
}

export default SiteSchema;
