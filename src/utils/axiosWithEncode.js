import axios from 'axios';

const axiosWithEncode = (data) => {
    //Gets token
    const token = localStorage.getItem("access_token");

    //Configures headers
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    if (token) headers['Authorization'] = token

    return axios.create({
        headers,
        baseURL: process.env.REACT_APP_API_URI,
        params: data
    })
}

export default axiosWithEncode;