import React, { useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const ProtectedRoutes = ({ router, children }) => {
  console.log(router.pathname);
  console.log(cookies.getAll());
  let info = {
    username: cookies.get("username"),
    id: cookies.get("id"),
    password: cookies.get("password"),
  };

  let freeRoutes = ["/login", "singuo"];
  let isProtected = freeRoutes.indexOf(router.pathname) === -1;
  let isAuth = typeof info.password === "string";

  useEffect(() => {
    if (!isAuth && isProtected) {
      router.push("/login");
    }
  }, []);

  return children;
};

export default ProtectedRoutes;
