import Home from "../components/frontend/Home";
import ViewCategoryQuiz from '../components/frontend/features/ViewCategoryQuiz';
import ViewItemQuiz from "../components/frontend/features/ViewItemQuiz";
import Tinlienquan from '../components/frontend/ContentMenu/Tinlienquan';
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';


const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/listquiz', exact: true, name: 'ListQuiz', component: ViewCategoryQuiz },
    { path: '/listquiz/:slug', exact: true, name: 'ItemQuiz', component: ViewItemQuiz },
    { path: '/tinlienquan', exact: true, name: 'Tinlienquan', component: Tinlienquan },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/403', exact: true, name: 'Page404', component: Page404 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
];

export default publicRoutesList;