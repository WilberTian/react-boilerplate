import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as contactActions from '../redux/actions/contactActions';
import * as routeActions from '../redux/actions/routeActions';
import contactService from '../services/contactService';

class ContactFormComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            contactItem: {}
        };
    }

    componentWillMount() {
        const { contactDetail } = this.props;

        this.setState({
            contactItem: contactDetail
        });
    }

    _updateName(e) {
        const value = e.target.value;
        const updatedContactItem = { ...this.state.contactItem, name: value };
        this.setState({
            contactItem: updatedContactItem
        });
    }

    _saveContactItem() {
        const { pushAction } = this.props;

        contactService.saveContact(this.state.contactItem);

        pushAction('/');
    }

    _navBack() {
        const { goBackAction } = this.props;
        goBackAction();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.contactItem.name} onChange={::this._updateName} />
                <button onClick={::this._saveContactItem}>Save</button>
                <button onClick={::this._navBack}>Back</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { contactDetail: state.contactReducer.selectedContact };
};

const mapDispatchToProps = {
    contactActions,
    goBackAction: routeActions.goBack,
    pushAction: routeActions.push
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormComponent);
