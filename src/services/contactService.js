import fetch from 'isomorphic-fetch';

export default {
    getContactList: async () => {
        const response = await fetch('/getContactList');
        const result = response.json();
        return result;
    }
};
