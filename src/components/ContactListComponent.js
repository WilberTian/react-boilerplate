import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as contactActions from '../redux/actions/contactActions';
import contactService from '../services/contactService';
import ContactItemComponent from './ContactItemComponent';

class ContactListComponent extends PureComponent {

    componentDidMount() {
        this._getContactList();
    }

    async _getContactList() {
        const { getContactListAction } = this.props;
        const data = await contactService.getContactList();
        getContactListAction(data.list);
    }

    render() {
        const { contactList } = this.props;

        return (
            <div>
                {contactList.map((contactItem, index) => {
                    return <ContactItemComponent key={index} contactItem={contactItem} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { contactList: state.contactReducer.contactList };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContactListAction: bindActionCreators(contactActions.getContactList, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListComponent);
