import React, {useEffect,useState, useRef} from 'react';
import {Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'reactjs-simple-spinner';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


const required = (value) => {
    if (!value) {
        return (
            <div className="error" >
                This field is required!
            </div>
        );
    }
};



const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const override = css`
      display: block;
      margin: 0 auto;
    `;

    useEffect(() => {
        setLoading(false);
        setMessage('');
    }, []);

    const removeUsernameErrors = () =>{
        setUsernameError('');
    }

    const removePasswordErrors = () => {
        setPasswordError('');
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage('');

        form.current.validateAll();
        setLoading(true);

        if (checkBtn.current.context._errors.length === 0){
            //call auth service login
            toast('Login In Progress');
            setLoading(false);
        }


    }
    const classes = useStyles();
    return(
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ color: "white" }}
            />
            {loading && (
                <div id="login-page">
                    <div className="container">
                        <form className="loader">
                            <div className="login-wrap mt-5">
                                <Spinner
                                    size="medium"
                                    message="Opening Dashboard..."
                                    line-fg-color="#64c3c2"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {!loading && (
                <div>
                    <div className="container" style={{marginTop: 80}}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                                <div className="card card-login">
                                    <Form onSubmit={handleLogin} ref={form} className="form container" id="login-form">
                                        <center>
                                            <p><a href="#" className="logo2">Sentiment Analysis</a></p>
                                        </center>


                                        <div className="card-body">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"/>
                      </span>
                                                </div>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    value={username}
                                                    placeholder="Username"
                                                    onKeyDown={removeUsernameErrors}
                                                    onChange={onChangeUsername}
                                                    validations={[required]}
                                                />
                                                <br/>

                                            </div>
                                            <center> <span className="error">{ usernameError }</span></center>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"/>
                      </span>
                                                </div>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    value={password}
                                                    onKeyDown={removePasswordErrors}
                                                    onChange={onChangePassword}
                                                    validations={[required]}
                                                /><br/>

                                            </div>
                                            <center> <span className="error">{ passwordError }</span></center>

                                        </div>


                                        <center>
                                            <button
                                                className="btn btn-primary btn-sm ld-ext-right"
                                                id="loginUser"
                                                onClick={handleLogin}
                                                type="submit"

                                            >
                   <span style={{fontSize: 16}}>
                  SIGN IN
                  </span>

                                            </button>
                                        </center>
                                       <hr/>

                                        <CheckButton style={{display: "none"}} ref={checkBtn} />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Login;