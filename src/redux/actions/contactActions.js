export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export const getContactList = (contactList) => ({
 	type: GET_CONTACT_LIST,
 	contactList: contactList
});

export const addContact = (name, phone) => ({
	type: ADD_CONTACT,
	name: name,
	phone: phone
});

export const updateContact = (id, contact) => ({
	type: UPDATE_CONTACT,
	id: id,
	contact: contact
});

export const selectContact = (id) => ({
	type: SELECT_CONTACT,
	id: id
});