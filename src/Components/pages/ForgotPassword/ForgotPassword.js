import React from 'react';
import {Button, Form, Input} from "antd";
import axios from "axios";

const ForgotPassword = (props) => {
    const submitForm = (formData) => {
        axios.post(`${process.env.REACT_APP_API_URI}/auth/forget-password`, formData)
            .then(response => {
                console.log(response);
                console.log("endpoint work")
            })
            .catch(err => console.error(err))
    }
    return (
        <section className="forgot-password-container">
            <div>
                <h1><span>Reset Your Password?</span></h1>
            </div>
            <div>
                <p>
                    Forgot your password? No problem, just enter your email address below,
                    click "Reset My Password" and we'll email you a link to a page where
                    you can change it.
                </p>
            </div>
            <section className="forgot-password-form-container">
                <Form className="forgot-password-form" onFinish={submitForm}>
                    <h2>EMAIL ADDRESS</h2>
                    <Form.Item name="email" rules={[{required: true, type: "email"}]}>
                        <Input className="forgot-password-input"/>
                    </Form.Item>
                    <Button className="forgot-password-button" type="primary" htmlType="submit">Reset My
                        Password</Button>
                </Form>
            </section>
        </section>
    )
}

export default ForgotPassword;