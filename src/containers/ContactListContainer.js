import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as routeActions from '../redux/actions/routeActions';

import ContactListComponent from '../components/ContactListComponent';

class ContactListContainer extends PureComponent {
    _navAddContact() {
        const { pushAction } = this.props;
        pushAction('contact-add');
    }

    render() {
        return (
            <div>
                <button onClick={::this._navAddContact}>Add</button>
                <ContactListComponent />
            </div>
        );
    }
}

export default connect(null, (dispatch) => {
    return {
        pushAction: bindActionCreators(routeActions.push, dispatch)
    };
})(ContactListContainer);
