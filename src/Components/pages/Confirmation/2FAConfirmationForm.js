import React from 'react';
import checkmark from '../../../img/Checkmark.png';
import { Link, useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const TFAConfirmationForm = (props) => {
  const { phone } = useParams();
  const finishForm = (data) => {
    console.log(data);
  };
  const inputStyle = {
    backgroundColor: 'rgb(26, 27, 28)',
    color: 'white',
  };
  return (
    <section className="tfa-container">
      <h1 id="title-text">Confirm That it Works</h1>
      <p className="title-subtext">
        You were just sent a text message with a verification code to {phone}
      </p>
      <section className="tfa-form-container tfa-confirmation-container">
        <Form layout="verticle" className="tfa-form" onFinish={finishForm}>
          <h2>Enter the Code</h2>

          <Form.Item
            className="confirm-code-item"
            name="confirmationCode"
            rules={[
              {
                required: true,
                message: 'Please input your confirmation code!',
              },
            ]}
          >
            <Input style={{ ...inputStyle }} id="confirmation-code" />
          </Form.Item>
          <h3 id="resend-text">
            Didn't get it? <a>Resend</a>
          </h3>
          <Form.Item className="Border tfa-button">
            <Button type="primary" htmlType="submit" className="button">
              Confirm Code
            </Button>
          </Form.Item>
        </Form>{' '}
      </section>
    </section>
  );
};

export default TFAConfirmationForm;
