import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import contactService from '../services/contactService';
import * as events from '../configs/events';

export default class ContactFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactItem: {}
        };
    }

    componentWillMount() {
        const { contactDetail } = this.props;

        this.setState({
            contactItem: contactDetail
        });
    }

    _updateName(e) {
        const value = e.target.value;
        const updatedContactItem = { ...this.state.contactItem, name: value };
        this.setState({
            contactItem: updatedContactItem
        });
    }

    _saveContactItem() {
        contactService.saveContact(this.state.contactItem);

        PubSub.publish(events.NAV_EVENT, '/');
    }

    _navBack() {
        PubSub.publish(events.GO_BACK);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.contactItem.name} onChange={::this._updateName} />
                <button onClick={::this._saveContactItem}>Save</button>
                <button onClick={::this._navBack}>Back</button>
            </div>
        );
    }
}
