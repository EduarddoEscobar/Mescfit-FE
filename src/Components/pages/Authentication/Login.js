import React from 'react';
import LoginForm from "./Forms/LoginForm";
import AuthCollapse from "../../common/Sections/AuthCollapse";

const Login = (props) => {
    return (
        <div className="auth-form-container">
            <LoginForm/>
            <AuthCollapse/>
        </div>
    );
};

export default Login;
