import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/'

const loginUser = async (email, password) => {
    const request = {
        'email': email,
        'password': password
    };
    let response;
    await axios.post(baseUrl + 'login', request)
        .then(res => {
            console.log(res);
           response = res;
        })
        .catch(err => {
            console.log(err);
            response = err;
        });

    return response;

}

export default {
    loginUser
}