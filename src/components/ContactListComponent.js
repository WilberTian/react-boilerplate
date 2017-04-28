import React, { Component } from 'react';

import ContactItemComponent from './ContactItemComponent';

export default class ContactListComponent extends Component {

	


    render() {
        let { contactList, contactActions } = this.props;

        return (
        	<div>
        		{contactList && contactList.map((contactItem, index) => 
        			<ContactItemComponent key={index} contactItem={contactItem}/>
        		)}
        	</div>
        );
    }


}