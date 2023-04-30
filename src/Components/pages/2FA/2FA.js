import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

const TFA = (props) => {
  const [value, setValue] = useState('');
  const finishForm = (data) => {
    console.log(data);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const inputStyle = {
    backgroundColor: 'rgb(26, 27, 28)',
    color: 'white',
  };

  return (
    <section className="tfa-container">
      <h1>Two Factor Authentication</h1>
      <p>
        Protect your account with an additional layer of security. When you sign
        in, 2 factor authentication helps make sure your personal information
        stays private, safe and secure.
      </p>
      <section className="tfa-form-container">
        <Form layout="verticle" className="tfa-form" onFinish={finishForm}>
          <h2>Phone Number You Want To Use For 2FA</h2>

          <Form.Item
            className="Border"
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input
              prefix={<span>+1</span>}
              style={{ ...inputStyle, width: '100%' }}
            />
          </Form.Item>
          <h3>How Do You Want To Get Codes?</h3>
          <Radio.Group
            className="Border tfa-radio"
            onChange={onChange}
            value={value}
          >
            <Radio value="text">Text Message</Radio>
            <Radio value="phone">Phone Call</Radio>
          </Radio.Group>
          <Form.Item className="Border tfa-button">
            <Button type="primary" htmlType="submit" className="button">
              Send Code
            </Button>
          </Form.Item>
        </Form>
      </section>
    </section>
  );
};

export default TFA;
