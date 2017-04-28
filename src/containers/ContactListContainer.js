import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import ContactListComponent from '../components/ContactListComponent';
import * as actions from '../redux/actions/contactActions';

import contactRequests from '../requests/contactRequests';

class ContactListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._getContactList();
    }

    render() {
        let { contactState, contactActions } = this.props;

        return (
            <ContactListComponent contactList={contactState.contactList} contactActions={contactActions}/>
        )
    }

    async _getContactList() {
        let { getContactList } = this.props.contactActions;
        let result = await contactRequests.getContactList();

        getContactList(result.data.list);
    }

}

const mapStateToProps = state => ({ contactState: state.contactReducer });

const mapDispatchToProps = dispatch => {
    return {
        contactActions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer);

