import { Button, Checkbox, Form, Input } from 'antd';
import GoogleLoginButton from '../../../common/Links/GoogleLoginButton';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { handleLogin } from '../../../../redux/actions/userActions';
import { connect } from 'react-redux';

const inputStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderBottom: '.25rem solid #fefefe',
};

const LoginForm = ({ handleLogin }) => {
  const navigate = useNavigate();
  const handleFinish = (formValues) => {
    handleLogin(formValues);
    navigate('/account/profile');
  };

  return (
    <Form
      name="login-form"
      onFinish={handleFinish}
      className="auth-form"
      layout="vertical"
      requiredMark={false}
    >
      <section className="auth-heading">
        <h1>Login</h1>
        <p className="auth-subheading mobile-only">
          Don't Have An Account?
          <Link to="/register">Create Account</Link>
        </p>
      </section>
      <Form.Item
        name="username"
        label="Username or Email Address"
        required
        rules={[{ type: 'email' }]}
        className="auth-form-item"
      >
        <Input style={inputStyle} id="email" className="auth-form-input" />
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
          iconRender={(visible) =>
            visible ? (
              <p style={{ color: '#8bafdf', cursor: 'pointer' }}>HIDE</p>
            ) : (
              <p style={{ color: '#8bafdf', cursor: 'pointer' }}>SHOW</p>
            )
          }
        />
      </Form.Item>
      <section className="login-settings">
        <Form.Item name="remember">
          <Checkbox id="remember-me">Remember Me</Checkbox>
        </Form.Item>
        <Link to="/forgot-password" className="desktop-only">
          Forgot Your Password?
        </Link>
      </section>
      <section className="submit-section login">
        <section className="google-login-section">
          <GoogleLoginButton />
          <p>OR</p>
          <section className="redirect-text-container">
            <a href="/forgot-password" className="mobile-only">
              Forgot Password?
            </a>
            <Link to="/register" className="desktop-only">
              Create An Account
            </Link>
          </section>
        </section>

        <Form.Item className="submit-button">
          <Button type="primary" htmlType="submit" id="submit">
            Submit
          </Button>
        </Form.Item>
      </section>
    </Form>
  );
};

export default connect(null, { handleLogin })(LoginForm);
