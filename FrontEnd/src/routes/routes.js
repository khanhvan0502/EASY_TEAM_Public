import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import AddCategoryQuiz from '../components/admin/category/AddCategoryQuiz';
import ViewCategoryQuiz from '../components/admin/category/ViewCategoryQuiz';
import EditCategoryQuiz from '../components/admin/category/EditCategoryQuiz';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-category-quiz', exact: true, name: 'Category', component: AddCategoryQuiz },
    { path: '/admin/view-category-quiz', exact: true, name: 'ViewCategory', component: ViewCategoryQuiz },
    { path: '/admin/edit-category-quiz/:id', exact: true, name: 'EditCategory', component: EditCategoryQuiz },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;