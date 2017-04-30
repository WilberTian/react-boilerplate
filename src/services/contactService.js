import fetch from 'isomorphic-fetch';

export default {
	getContactList: async() => {
		let response = await fetch('/getContactList');
		let result = response.json();
	    return result;
	}
}