import React, { PureComponent } from 'react';
import PubSub from 'pubsub-js';

import * as events from '../configs/events';

export default class ContactItemComponent extends PureComponent {

    _showDetail() {
        const { id } = this.props.contactItem;
        PubSub.publish(events.NAV_EVENT, `contact-detail/${id}`);
    }

    render() {
        const { id, name, phone } = this.props.contactItem;

        return (
            <div>
                <span>{id}</span>
                <span>{name}</span>
                <span>{phone}</span>
                <button onClick={::this._showDetail}>Detail</button>
            </div>
        );
    }
}
