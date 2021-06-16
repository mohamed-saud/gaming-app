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
  const [autharedy, setAutharedy] = useState(false);

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
    netlifyIdentity.on("init", (user) => {
      setAutharedy(true);
      console.log("init event");
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
    autharedy,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
