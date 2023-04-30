import React from 'react';
import {Button, Checkbox, Form, Input, Upload} from 'antd';

const inputStyles = {
    backgroundColor: '#1a1b1c',
    color: 'white',
};

const TestimonialForm = (props) => {
    const handleSubmit = (formValues) => {
        console.log(formValues);
        console.log('submitted');
    };

    return (
        <Form
            className="testimonial-form"
            name="testimonial-form"
            onFinish={handleSubmit}
        >
            <Form.Item
                name="message"
                className="form-item"
            >
                <Input.TextArea
                    bordered={false}
                    placeholder="Message Here"
                    className="big-input form-input"
                    style={inputStyles}
                />
            </Form.Item>
            <Form.Item
                name="public"
                valuePropName="public"
                className="testimonial-checkbox"
            >
                <Checkbox>I give permission to include my testimonial on the
                    website or in promotional material</Checkbox>
            </Form.Item>
            <Upload listType="picture">
                <Button icon={null}>Add Image(s) (Optional)</Button>
            </Upload>
            <Form.Item className="submit-button right-text">
                <Button type="primary" htmlType="submit" style={{border: "0"}}>
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TestimonialForm;
