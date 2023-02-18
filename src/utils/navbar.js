import useUniqueId from '../hooks/index.jsx'
import Home from '../pages/HomePage/HomePage.jsx'
import PropertiesPage from '../pages/PropertiesPage/PropertiesPage.jsx'
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
]
    