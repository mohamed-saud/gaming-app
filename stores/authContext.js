import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  autharedy: false,
});
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser({ user });
      netlifyIdentity.close();
      console.log("login event");
    });
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });
    ///// init netlfy identity connection
    netlifyIdentity.init();
  }, []);
  ///////////////login function/////
  const login = () => {
    netlifyIdentity.open();
  };
  /////////////////logout function///
  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    login,
    user,
    logout,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
