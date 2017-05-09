import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PubSub from 'pubsub-js';

import * as _contactActions from '../redux/actions/contactActions';
import * as _routeActions from '../redux/actions/routeActions';
import * as events from '../configs/events';
import * as actions from '../configs/actions';

import ContactListComponent from '../components/ContactListComponent';

class ContactListContainer extends PureComponent {

    componentWillMount() {
        PubSub.subscribe(events.NAV_EVENT, (event, path) => {
            const { push } = this.props.routeActions;
            push(path);
        });

        PubSub.subscribe(actions.GET_CONTACT_LIST, (event, data) => {
            const { getContactList } = this.props.contactActions;
            getContactList(data);
        });
    }

    componentWillUnmount() {
        PubSub.clearAllSubscriptions();
    }

    _navAddContact() {
        PubSub.publish(events.NAV_EVENT, 'contact-add');
    }

    render() {
        const { contactList } = this.props;

        return (
            <div>
                <button onClick={::this._navAddContact}>Add</button>
                <ContactListComponent contactList={contactList} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { contactList: state.contactReducer.contactList };
};

const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(_contactActions, dispatch),
        routeActions: bindActionCreators(_routeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer);
