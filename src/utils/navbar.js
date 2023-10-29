import useUniqueId from "../hooks/index.jsx";
import React from "react";
import HouseItemPage from "../pages/HouseItemPage/PropertiesPage.jsx";
import FavouritesPage from "../pages/FavouritesPage/PropertiesPage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";
import AddHousePage from "../pages/AddHousePage/AddHousePage.jsx";
const Home = React.lazy(() => import("../pages/HomePage/HomePage.jsx"));
const PropertiesPage = React.lazy(() =>
  import("../pages/PropertiesPage/PropertiesPage.jsx")
);
const RegisterPage = React.lazy(() => import("../pages/RegisterPage/RegisterPage.jsx"));

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
    path: "profile",
    title: "My-profile",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <ProfilePage />
      </React.Suspense>
    ),
    isPrivate: true,
    isHidden: true,
  },
  {
    id: useUniqueId,
    path: "profile/newhouse",
    title: "My-profile",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AddHousePage />
      </React.Suspense>
    ),
    isPrivate: true,
    isHidden: true,
  },
  {
    id: useUniqueId,
    path: "profile/editHouse/:id",
    title: "My-profile",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AddHousePage />
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
  
];
