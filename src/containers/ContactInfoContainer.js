import React, { Component } from 'react';

import ContactInfoComponent from '../components/ContactInfoComponent';

class ContactInfoContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContactInfoComponent params={ this.props.params }/>
        )
    }

}

export default ContactInfoContainer;
