import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactInfoComponent from '../components/ContactInfoComponent';

class ContactInfoContainer extends Component {
    static propTypes = {
        params: PropTypes.string
    };

    render() {
        return (
            <ContactInfoComponent params={this.props.params} />
        );
    }

}

export default ContactInfoContainer;
