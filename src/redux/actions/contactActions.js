import * as actions from '../../configs/actions';

export const getContactList = (contactList) => {
    return {
        type: actions.GET_CONTACT_LIST,
        contactList
    };
};

export const getContactDetail = (contactDetail) => {
    return {
        type: actions.GET_CONTACT_DETAIL,
        contactDetail
    };
};

export const clearContactDetail = () => {
    return {
        type: actions.CLEAR_CONTACT_DETAIL
    };
};
