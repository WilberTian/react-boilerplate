import {Route} from 'react-router';

import App from '../containers/common/App';
import ContactInfoContainer from '../containers/ContactInfoContainer';
import ContactListContainer from '../containers/ContactListContainer';


const ContactDisplayRoute = {
    path: 'contact-display/:id',
    component: ContactInfoContainer,
};

const ContactAddRoute = {
    path: 'contact-add',
    component: ContactInfoContainer,
};

const ContactEditRoute = {
    path: 'contact-edit/:id',
    component: ContactInfoContainer,
};

const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: ContactListContainer,
    },
    childRoutes: [
        ContactDisplayRoute,
        ContactAddRoute,
        ContactEditRoute
    ]
};

export default route;
