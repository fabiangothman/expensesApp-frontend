import { createContext, FC, useContext } from "react";
import { INavContext, INavProvider } from "../interfaces/NavContext";
import { menu } from "../constants/navigation";

// Create a context with a default value
const NavContext = createContext<INavContext | undefined>(undefined);

const NavProvider: FC<INavProvider> = ({ children }) => {

  const contextValues: INavContext = menu;

  return (
    <NavContext.Provider value={contextValues}>
      {children}
    </NavContext.Provider>
  );
}

export default NavProvider;

export const useNav = (): INavContext => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error('NavContext must be used within a valid parent.');
  }

  return context;
};