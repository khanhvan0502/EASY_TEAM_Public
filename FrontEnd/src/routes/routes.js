import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import AddCategoryQuiz from '../components/admin/category/AddCategoryQuiz';
import ViewCategoryQuiz from '../components/admin/category/ViewCategoryQuiz';
import EditCategoryQuiz from '../components/admin/category/EditCategoryQuiz';
import AddItem from '../components/admin/item/AddItem';
import ViewItem from '../components/admin/item/ViewItem';
import EditItem from '../components/admin/item/EditItem';
import AddQuiz from '../components/admin/quiz/AddQuiz';
import ViewQuiz from '../components/admin/quiz/ViewQuiz';
import EditQuiz from '../components/admin/quiz/EditQuiz';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-category-quiz', exact: true, name: 'Category', component: AddCategoryQuiz },
    { path: '/admin/view-category-quiz', exact: true, name: 'ViewCategory', component: ViewCategoryQuiz },
    { path: '/admin/edit-category-quiz/:id', exact: true, name: 'EditCategory', component: EditCategoryQuiz },
    { path: '/admin/add-item-quiz', exact: true, name: 'AddItem', component: AddItem },
    { path: '/admin/view-item-quiz', exact: true, name: 'ViewItem', component: ViewItem },
    { path: '/admin/edit-item-quiz/:id', exact: true, name: 'EditItem', component: EditItem },
    { path: '/admin/add-quiz', exact: true, name: 'AddQuiz', component: AddQuiz },
    { path: '/admin/view-quiz', exact: true, name: 'ViewQuiz', component: ViewQuiz },
    { path: '/admin/edit-quiz/:id', exact: true, name: 'EditQuiz', component: EditQuiz },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;