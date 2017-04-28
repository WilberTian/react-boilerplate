import { GET_CONTACT_LIST, ADD_CONTACT, UPDATE_CONTACT, SELECT_CONTACT } from '../actions/contactActions';

const initialState = {
	contactList: [],
	selectedContact: {}
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            return {
            	...state,
            	contactList: action.contactList
            };

        case ADD_CONTACT:
            return state - 1;

        case UPDATE_CONTACT:
            return state - 1;

        case SELECT_CONTACT:
        	return state;

        default:
            return state;
    }
};

export default contactReducer;