import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = (dispatch) => {
    return {
        contactActions: bindActionCreators(contactActions, dispatch),
        goBackAction: bindActionCreators(routeActions.goBack, dispatch),
        pushAction: bindActionCreators(routeActions.push, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormComponent);
