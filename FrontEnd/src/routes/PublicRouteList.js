import Home from "../components/frontend/Home";
import ViewCategoryQuiz from '../components/frontend/features/ViewCategoryQuiz';
import ViewItemQuiz from "../components/frontend/features/ViewItemQuiz";
import Tinlienquan from '../components/frontend/ContentMenu/Tinlienquan';
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';
import ViewQuiz from "../components/frontend/features/ViewQuiz";
import QuizText from "../components/frontend/features/QuizText";
import Search from "../components/frontend/features/Search";


const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/tinlienquan', exact: true, name: 'Tinlienquan', component: Tinlienquan },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/403', exact: true, name: 'Page404', component: Page404 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/listquiz', exact: true, name: 'ListQuiz', component: ViewCategoryQuiz },
    { path: '/listquiz/:slug', exact: true, name: 'ItemQuiz', component: ViewItemQuiz },
    { path: '/listquiz/:slug/:slug', exact: true, name: 'Quiz', component: ViewQuiz },
    { path: '/quiztextitem', exact: true, name: 'Quizssss', component: QuizText },
    { path: '/search', exact: true, name: 'Search', component: Search },
];

export default publicRoutesList;