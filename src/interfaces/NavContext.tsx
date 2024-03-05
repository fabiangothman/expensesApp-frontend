import { ReactNode } from "react";

export interface IMenuItem {
  label: string;
  link: string;
  display: boolean;
  current: boolean;
}

export interface IMenuTypes {
  primary: IMenuItem[];
  secondary: IMenuItem[];
}

export interface INavContext {
  siteMenu: IMenuTypes;
  appMenu: IMenuTypes;
}

export interface INavProvider {
  children: ReactNode;
}