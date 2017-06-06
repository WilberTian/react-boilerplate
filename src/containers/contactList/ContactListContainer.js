import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as routeActions from '../../redux/actions/routeActions';

import ContactListComponent from './components/ContactListComponent';

import './contact-list-container.less';

class ContactListContainer extends PureComponent {
    _navAddContact() {
        const { pushAction } = this.props;
        pushAction('contact-add');
    }

    render() {
        return (
            <div className="contact-list-container">
                <Button className="add-contact-btn" type="primary" onClick={::this._navAddContact}>Add</Button>
                <ContactListComponent />
            </div>
        );
    }
}

export default connect(null, {
    pushAction: routeActions.push
})(ContactListContainer);
