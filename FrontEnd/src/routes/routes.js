import Dashboard from '../components/admin/Dashboard';
import AddProfile from '../components/admin/Profile/AddProfile';
import Profile from '../components/admin/Profile/Profile';
import Question from '../components/admin/Question/Question';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/admin/profile/add', exact: true, name: 'AddProfile', component: AddProfile },
    { path: '/admin/question', exact: true, name: 'Question', component: Question },
];

export default routes;