import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const {
        signInUsingGoogle, signInUsingGithub} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be alt least 6 character .')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 Upper case');
            return;
        }
        // isLogin ?  processLogin(email, password): registerNewUser(email, password);
        if (isLogin) {
            processLogin(email, password);
        } else {
            registerNewUser(email, password);
        }

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => {})
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch(error => {
                setError("Your email is not registared please registared");
        })

    }


    const registerNewUser = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
                setUserName();
            })
            .catch(error => {
            setError("This Email already in use")
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <article className="card-body py-5 px-5">
                            <h4 className="card-title mb-4 mt-1 text-center text-uppercase">Please {isLogin ? 'Login' : 'Registation'}</h4>
                            <p className="text-center">
                                <button onClick={signInUsingGoogle} className="btn btn-block btn-outline-info mx-2">Login via Google</button>
                                {/* <button onClick={signInUsingFacebook} className="btn btn-block btn-outline-primary mx-2"> Login via facebook</button> */}
                                <button onClick={signInUsingGithub} className="btn btn-block btn-outline-secondary"> Login via Github</button>
                            </p>

                            <form onSubmit={handleRegistration} className="px-5 m-auto w-50">
                                {!isLogin && <div className="form-group mb-2">
                                    <input onBlur={handleNameChange} name="" className="form-control" placeholder="Please Type Your Name" type="name" required/>
                                </div> }
                                <div className="form-group mb-2">
                                    <input onBlur={handleEmailChange} name="" className="form-control" placeholder="Email or login" type="email" required/>
                                </div>
                                <div className="form-group mb-2">
                                    <span className="text-danger">{error }</span>
                                    <input onBlur={handlePasswordChange} name="" className="form-control" placeholder="*********" type="password" required/>
                                </div>
                                 <div className="form-check mb-2">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"></input>
                                    <label className="form-check-leble" htmlFor="gridCheck1">Alrdeady Register ?</label>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                             <button type="submit" className="btn btn-primary btn-block"> {isLogin ? "Login": 'Registation'} </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
