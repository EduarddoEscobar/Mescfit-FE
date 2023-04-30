import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import GoogleLoginButton from '../../../common/Links/GoogleLoginButton';
import { Link, useNavigate } from 'react-router-dom';
import { handleRegister } from '../../../../redux/actions/userActions';
import { connect } from 'react-redux';

const inputStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderBottom: '.25rem solid #fefefe',
};

const RegisterForm = ({ handleRegister }) => {
  const [state, setState] = useState({
    email: '',
    confirmEmail: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (formValues) => {
    handleRegister(formValues);
    navigate('/account/profile');
  };

  return (
    <Form
      name="register-form"
      onFinish={handleSubmit}
      className="auth-form"
      layout="vertical"
      requiredMark={false}
    >
      <section className="auth-heading">
        <h1>Create Account</h1>
      </section>
      <Form.Item
        name="firstName"
        label="First Name"
        required
        className="auth-form-item"
      >
        <Input style={inputStyle} id="first-name" className="auth-form-input" />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        required
        className="auth-form-item"
      >
        <Input style={inputStyle} id="last-name" className="auth-form-input" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        required
        rules={[{ type: 'email' }]}
        className="auth-form-item"
      >
        <Input
          style={inputStyle}
          id="email"
          className="auth-form-input"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="confirmEmail"
        label="Confirm Email"
        rules={[
          {
            type: 'email',
          },
        ]}
        className="auth-form-item"
      >
        <Input
          style={inputStyle}
          id="confirm-email"
          className="auth-form-input"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true }, { type: 'string', min: 6, max: 20 }]}
        className="auth-form-item"
      >
        <Input.Password
          style={inputStyle}
          id="password"
          className="auth-form-input"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        rules={[{ required: true }, { type: 'string', min: 6, max: 20 }]}
        className="auth-form-item"
      >
        <Input.Password
          style={inputStyle}
          id="confirm-password"
          className="auth-form-input"
        />
      </Form.Item>
      <Form.Item name="TFA" valuePropName="TFA">
        <Checkbox id="TFA" className="auth-form-checkbox">
          Enable 2 Factor Authentication
        </Checkbox>
      </Form.Item>
      <Form.Item name="subscribe" valuePropName="subscription">
        <Checkbox id="email-subscription" className="auth-form-checkbox">
          Enjoy Special Offers, Announcements, and More - Sent Directly to Your
          Inbox. (We hate spam just as much you do, so only occasionally)
        </Checkbox>
      </Form.Item>
      <section className="submit-section register">
        <Form.Item className="submit-button">
          <Button type="primary" htmlType="submit" id="submit">
            Create An Account
          </Button>
        </Form.Item>
        <h3>OR</h3>
        <GoogleLoginButton text="Sign In With Google" />
        <p id="terms-text">
          By creating an account, you agree to escobarmark.com's{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> and
          <Link to="/terms-of-service"> Terms of Use</Link>
        </p>
      </section>
    </Form>
  );
};

export default connect(null, { handleRegister })(RegisterForm);
