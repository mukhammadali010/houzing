import useUniqueId from "../hooks/index.jsx";
import React from "react";
const Home = React.lazy(() => import("../pages/HomePage/HomePage.jsx"));
const PropertiesPage = React.lazy(() =>
  import("../pages/PropertiesPage/PropertiesPage.jsx")
);
const LoginPage = React.lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const ContactPage = React.lazy(() => import("../pages/ContactPage/ContactPage.jsx"));

export const navbar = [
  {
    id: useUniqueId,
    path: "home",
    title: "Home",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Home />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
  {
    id: useUniqueId,
    path: "properties",
    title: "Properties",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
  {
    id: useUniqueId,
    path: "login",
    title: "Login",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <LoginPage />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: true,
  },
  {
    id: useUniqueId,
    path: "contact",
    title: "Contact",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <ContactPage />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: false,
  },
];
