import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Form, Input, Select, DatePicker, Button } from 'antd';

import * as contactActions from '../../../redux/actions/contactActions';
import * as routeActions from '../../../redux/actions/routeActions';
import contactService from '../../../services/contactService';

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

    _saveContactItem(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const { pushAction } = this.props;

                contactService.saveContact(values);

                pushAction('/');
            }
        });
    }

    _navBack() {
        const { goBackAction } = this.props;
        goBackAction();
    }

    _checkName(rule, value, callback) {
        if (value && value.length < 3) {
            callback('Name should be more than 2 chars!');
        } else {
            callback();
        }
    }

    render() {
        const FormItem = Form.Item;
        const Option = Select.Option;
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <div>
                <Form onSubmit={::this._saveContactItem}>
                    <FormItem
                      {...formItemLayout}
                      label="Name"
                      hasFeedback
                    >
                        {getFieldDecorator('name', {
                            initialValue: this.state.contactItem.name,
                            rules: [{
                                required: true, message: 'Please input your Name',
                            }, {
                                validator: this._checkName,
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Gender"
                      hasFeedback
                    >
                        {getFieldDecorator('gender', {
                            initialValue: this.state.contactItem.gender,
                            rules: [{
                                required: true, message: 'Please select your gender',
                            }]
                        })(
                            <Select placeholder="Select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Birthday"
                      hasFeedback
                    >
                        {getFieldDecorator('birthday', {
                            initialValue: (this.state.contactItem.birthday ?
                                            moment(this.state.contactItem.birthday, 'YYYY-MM-DD') :
                                            ''),
                            rules: [{
                                required: true, message: 'Please select your brithday',
                            }]
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Phone"
                      hasFeedback
                    >
                        {getFieldDecorator('phone', {
                            initialValue: this.state.contactItem.phone,
                            rules: [{
                                required: true,
                                pattern: /^1[34578]\d{9}$/,
                                message: 'Please input valid phone',
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="E-mail"
                      hasFeedback
                    >
                        {getFieldDecorator('email', {
                            initialValue: this.state.contactItem.email,
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Address"
                      hasFeedback
                    >
                        {getFieldDecorator('address', {
                            initialValue: this.state.contactItem.address,
                            rules: [{
                                required: true, message: 'Please input your address',
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">Save</Button>
                        <Button size="large" onClick={::this._navBack}>Cancel</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const ContactFormComponentWrapper = Form.create()(ContactFormComponent);

const mapStateToProps = (state) => {
    return { contactDetail: state.contactReducer.selectedContact };
};

const mapDispatchToProps = {
    contactActions,
    goBackAction: routeActions.goBack,
    pushAction: routeActions.push
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormComponentWrapper);
