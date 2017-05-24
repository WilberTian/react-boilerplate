import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as routeActions from '../redux/actions/routeActions';

class ContactItemComponent extends PureComponent {

    _showDetail() {
        const { id } = this.props.contactItem;
        const { pushAction } = this.props;
        pushAction(`contact-detail/${id}`);
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

const mapDispatchToProps = {
    pushAction: routeActions.push
};

export default connect(null, mapDispatchToProps)(ContactItemComponent);
