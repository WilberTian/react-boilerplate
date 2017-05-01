export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export const getContactList = (contactList) => {
    return {
        type: GET_CONTACT_LIST,
        contactList
    };
};

export const addContact = (name, phone) => {
    return {
        type: ADD_CONTACT,
        name,
        phone
    };
};

export const updateContact = (id, contact) => {
    return {
        type: UPDATE_CONTACT,
        id,
        contact
    };
};

export const selectContact = (id) => {
    return {
        type: SELECT_CONTACT,
        id
    };
};
