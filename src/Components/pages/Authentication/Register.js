import React from 'react';
import RegisterForm from "./Forms/RegisterForm";
import {Collapse} from "antd";
import AuthCollapse from "../../common/Sections/AuthCollapse";

const {Panel} = Collapse;

const Register = (props) => {
    return (
        <section className="auth-form-container">
            <RegisterForm/>
            <AuthCollapse/>
        </section>
    );
};

export default Register;
