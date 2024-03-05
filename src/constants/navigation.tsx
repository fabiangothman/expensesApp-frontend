import { INavContext } from "../interfaces/NavContext";

export const menu: INavContext = {
  siteMenu: {
    primary: [
      {
        label: "Home",
        link: "/",
        display: true,
        current: false,
      },
      {
        label: "About",
        link: "/about",
        display: true,
        current: false,
      }
    ],
    secondary: [
      {
        label: "",
        link: "",
        display: true,
        current: false,
      }
    ]
  },
  appMenu: {
    primary: [
      {
        label: "",
        link: "",
        display: true,
        current: false,
      }
    ],
    secondary: [
      {
        label: "",
        link: "",
        display: true,
        current: false,
      }
    ]
  }
}