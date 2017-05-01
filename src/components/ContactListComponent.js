import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactItemComponent from './ContactItemComponent';

export default class ContactListComponent extends Component {
    static propTypes = {
        contactList: PropTypes.array.isRequired,
        contactActions: PropTypes.object.isRequired
    };

    render() {
        const { contactList, contactActions } = this.props;

        return (
            <div>
                {contactList && contactList.map((contactItem, index) => {
                    return <ContactItemComponent key={index} contactItem={contactItem} contactActions={contactActions} />;  // eslint-disable-line max-len
                })}
            </div>
        );
    }
}
