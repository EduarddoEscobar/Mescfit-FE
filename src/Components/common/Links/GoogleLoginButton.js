import {useGoogleLogin} from "@react-oauth/google";
import React from "react";
import axiosWithEncode from "../../../utils/axiosWithEncode";
import signInWithGoogle from '../../../img/SignInWithGoogle.png';

const GoogleLoginButton = ({text}) => {
    const handleGoogleLogin = (data) => {
        axiosWithEncode(data).post(`/auth/google`)
            .then(r => {
                const {refresh_token, access_token} = r.data;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("refresh_token", refresh_token);
            }).catch(err => console.error(err));
    }

    const handleError = () => {
        alert("There was an error logging in with google");
    }

    const googleLogin = useGoogleLogin({
        onSuccess: handleGoogleLogin,
        onError: handleError,
    });

    return (
        <button onClick={googleLogin} id="google-login-button">
            <img src={signInWithGoogle} alt="google sign in button" id="google-login"/>
        </button>
    );
}

export default GoogleLoginButton;