import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import contactService from '../services/contactService';
import ContactItemComponent from './ContactItemComponent';
import * as actions from '../configs/actions';

export default class ContactListComponent extends Component {

    componentDidMount() {
        this._getContactList();
    }

    async _getContactList() {
        const data = await contactService.getContactList();
        PubSub.publish(actions.GET_CONTACT_LIST, data.list);
    }

    render() {
        const { contactList } = this.props;

        return (
            <div>
                {contactList.map((contactItem, index) => {
                    return <ContactItemComponent key={index} contactItem={contactItem} />;
                })}
            </div>
        );
    }
}
