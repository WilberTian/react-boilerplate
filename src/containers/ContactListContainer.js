import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactListComponent from '../components/ContactListComponent';
import * as actions from '../redux/actions/contactActions';
import contactService from '../services/contactService';

class ContactListContainer extends Component {
    static propTypes = {
        contactState: PropTypes.object.isRequired,
        contactActions: PropTypes.object.isRequired
    };

    componentDidMount() {
        this._getContactList();
    }

    async _getContactList() {
        const { getContactList } = this.props.contactActions;
        const result = await contactService.getContactList();

        getContactList(result.data.list);
    }

    render() {
        const { contactState, contactActions } = this.props;

        return (
            <ContactListComponent contactList={contactState.contactList} contactActions={contactActions} />
        );
    }

}

const mapStateToProps = (state) => {
    return { contactState: state.contactReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer);

