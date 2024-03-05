import { ReactNode } from "react";
import { IUser } from "./User";
import { ISession } from "./Session";

export interface IAuthContext {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
  session: ISession | undefined;
  setSession: (session: ISession) => void;
}

export interface IAuthProvider {
  children: ReactNode;
}