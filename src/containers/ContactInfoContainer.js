import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactInfoComponent from '../components/ContactInfoComponent';

class ContactInfoContainer extends Component {
    static defaultProps = {
        params: {}
    };
    static propTypes = {
        params: PropTypes.object
    };

    render() {
        return (
            <ContactInfoComponent params={this.props.params} />
        );
    }

}

export default ContactInfoContainer;
