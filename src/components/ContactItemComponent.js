import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactItemComponent extends Component {
    static propTypes = {
        contactItem: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        const { id, name, phone } = this.props.contactItem;

        return (
            <div>
                {id} - {name} - {phone}
            </div>
        );
    }
}
