import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as _contactActions from '../redux/actions/contactActions';
import * as _routeActions from '../redux/actions/routeActions';
import contactService from '../services/contactService';


class ContactInfoContainer extends PureComponent {

    componentDidMount() {
        this._getContactDetail();
    }

    async _getContactDetail() {
        const params = this.props.params;
        const { getContactDetail } = this.props.contactActions;
        const data = await contactService.getContactDetail(params.id);

        getContactDetail(data.contact);
    }

    async _saveContact() {
        try {
            await contactService.saveContact(this.state.updatedContact);
        } catch (ex) {
            console.log(ex);
        }
    }

    _navContactList() {
        const { push } = this.props.routeActions;
        push('/');

        const { clearContactDetail } = this.props.contactActions;
        clearContactDetail();
    }

    _navContactEdit() {
        const { id } = this.props.contactDetail;
        const { push } = this.props.routeActions;
        push(`contact-edit/${id}`);
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

const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(_contactActions, dispatch),
        routeActions: bindActionCreators(_routeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoContainer);
