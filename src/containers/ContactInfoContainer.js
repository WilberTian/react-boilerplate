import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as contactActions from '../redux/actions/contactActions';
import * as routeActions from '../redux/actions/routeActions';
import contactService from '../services/contactService';


class ContactInfoContainer extends PureComponent {

    componentDidMount() {
        this._getContactDetail();
    }

    async _getContactDetail() {
        const params = this.props.params;
        const { getContactDetailAction } = this.props;
        const data = await contactService.getContactDetail(params.id);

        getContactDetailAction(data.contact);
    }

    async _saveContact() {
        try {
            await contactService.saveContact(this.state.updatedContact);
        } catch (ex) {
            console.log(ex);
        }
    }

    _navContactList() {
        const { pushAction } = this.props;
        pushAction('/');

        const { clearContactDetailAction } = this.props;
        clearContactDetailAction();
    }

    _navContactEdit() {
        const { id } = this.props.contactDetail;
        const { pushAction } = this.props;
        pushAction(`contact-edit/${id}`);
    }

    render() {
        const { name, gender, birthday, phone, address } = this.props.contactDetail;

        return (
            <div>
                {name} {gender} {birthday} {phone} {address}
                <button onClick={::this._navContactEdit}>Edit</button>
                <button onClick={::this._navContactList}>Back</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { contactDetail: state.contactReducer.selectedContact };
};

const mapDispatchToProps = {
    clearContactDetailAction: contactActions.clearContactDetail,
    getContactDetailAction: contactActions.getContactDetail,
    pushAction: routeActions.push
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoContainer);
