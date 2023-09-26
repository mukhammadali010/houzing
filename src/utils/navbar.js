import useUniqueId from "../hooks/index.jsx";
import React from "react";
import HouseItemPage from "../pages/HouseItemPage/PropertiesPage.jsx";
import FavouritesPage from "../pages/FavouritesPage/PropertiesPage.jsx";
const Home = React.lazy(() => import("../pages/HomePage/HomePage.jsx"));
const PropertiesPage = React.lazy(() =>
  import("../pages/PropertiesPage/PropertiesPage.jsx")
);
const RegisterPage = React.lazy(() => import("../pages/RegisterPage/RegisterPage.jsx"));
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
    path: "favourite",
    title: "Favourites",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <FavouritesPage />
      </React.Suspense>
    ),
    isPrivate: true,
    isHidden: true,
  },
  {
    id: useUniqueId,
    path: "properties/:id",
    title: "Single house",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItemPage />
      </React.Suspense>
    ),
    isPrivate: false,
    isHidden: true,
  },
  {
    id: useUniqueId, 
    path: "register",
    title: "Register",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <RegisterPage/>
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
