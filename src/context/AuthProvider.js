import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const login = (user) => {
    setUser(user);
    setAuth(true);
  };
  const logout = () => {
    setUser(null);
    setAuth(false);
  };
  return (
    <AuthContext.Provider value={{ user, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
