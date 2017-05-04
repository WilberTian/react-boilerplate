import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PubSub from 'pubsub-js';

import * as _contactActions from '../redux/actions/contactActions';
import * as _routeActions from '../redux/actions/routeActions';
import * as events from '../configs/events';

import ContactFormComponent from '../components/ContactFormComponent';

class ContactFormContainer extends Component {
    componentWillMount() {
        const { goBack } = this.props.routeActions;

        PubSub.subscribe(events.GO_BACK, () => {
            goBack();
        });

        PubSub.subscribe(events.NAV_EVENT, (event, path) => {
            const { push } = this.props.routeActions;
            push(path);
        });
    }

    componentWillUnmount() {
        PubSub.clearAllSubscriptions();
    }

    render() {
        const { contactDetail } = this.props;

        return (
            <ContactFormComponent contactDetail={contactDetail} />
        );
    }

}

const mapStateToProps = (state) => {
    return { contactDetail: state.contactReducer.selectedContact };
};

const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(_contactActions, dispatch),
        routeActions: bindActionCreators(_routeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
