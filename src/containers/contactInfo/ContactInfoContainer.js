import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';

import * as contactActions from '../../redux/actions/contactActions';
import * as routeActions from '../../redux/actions/routeActions';
import contactService from '../../services/contactService';

import './contact-info.less';

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
        const { name, gender, birthday, phone, email, address } = this.props.contactDetail;

        return (
            <Card title="Detail" className="contact-info-card">
                <div className="contact-info">
                    <p>
                        <strong>Name</strong>
                        {name}
                    </p>
                    <p>
                        <strong>Gender</strong>
                        {gender}
                    </p>
                    <p>
                        <strong>Birthday</strong>
                        {birthday}
                    </p>
                    <p>
                        <strong>Phone</strong>
                        {phone}
                    </p>
                    <p>
                        <strong>Email</strong>
                        {email}
                    </p>
                    <p>
                        <strong>Address</strong>
                        {address}
                    </p>
                </div>
                <Button icon="edit" onClick={::this._navContactEdit}>Edit</Button>
                <Button icon="arrow-left" onClick={::this._navContactList}>Back</Button>
            </Card>
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
