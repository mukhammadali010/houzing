import useUniqueId from '../hooks/index.jsx'
import Home from '../pages/HomePage/HomePage.jsx'
import PropertiesPage from '../pages/PropertiesPage/PropertiesPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import Contact from '../components/Contact/index.jsx'
export const navbar = [
    {
        id: useUniqueId,
        path: 'home',
        title: 'Home',
        element: <Home /> ,
        isPrivate: false,
        isHidden: false
    },
    {
        id: useUniqueId,
        path: 'properties',
        title: 'Properties',
        element: <PropertiesPage /> ,
        isPrivate: false,
        isHidden: false,
    },
    {
        id: useUniqueId,
        path: 'login',
        title: 'Login',
        element: <LoginPage /> ,
        isPrivate: false,
        isHidden: true,
    },
    {
        id: useUniqueId,
        path: 'contact',
        title: 'Contact',
        element: <Contact /> ,
        isPrivate: false,
        isHidden: false,
    },
]
    