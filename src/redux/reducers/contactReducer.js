import {
    GET_CONTACT_LIST,
    GET_CONTACT_DETAIL,
    CLEAR_CONTACT_DETAIL
} from '../../configs/actions';


const initialState = {
    contactList: [],
    selectedContact: {
        id: null,
        name: '',
        gender: '',
        birthday: '',
        phone: '',
        address: ''
    }
};


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            return {
                ...state,
                contactList: action.contactList
            };

        case GET_CONTACT_DETAIL:
            return {
                ...state,
                selectedContact: action.contactDetail
            };

        case CLEAR_CONTACT_DETAIL:
            return {
                ...state,
                selectedContact: initialState.selectedContact
            };

        default:
            return state;
    }
};

export default contactReducer;
