import { createContext, useState, FC, useContext } from "react";
import { IUser } from "../interfaces/User";
import { ISession } from "../interfaces/Session";
import { IAuthContext, IAuthProvider } from "../interfaces/AuthContext";

// Create a context with a default value
const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [session, setSession] = useState<ISession>();

  const contextValues: IAuthContext = {
    user,
    setUser,
    session,
    setSession
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within a valid parent.');
  }

  return context;
};