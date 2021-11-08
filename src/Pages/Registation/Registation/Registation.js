import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// Register login pupose input
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registation = () => {
     const {
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        setIsLoading
        } = useAuth;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const auth = getAuth();
        if (password.length < 6) {
            setError('Password Must be alt least 6 character .')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 Upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch(error => {
            setError(error.message)
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <article className="card-body py-5 px-5">
                            <h4 className="card-title mb-4 mt-1 text-center text-uppercase">Please Login / Register</h4>
                            <p className="text-center">
                                <button onClick={signInUsingGoogle} className="btn btn-block btn-outline-info mx-2">Login via Google</button>
                                {/* <button onClick={signInUsingFacebook} className="btn btn-block btn-outline-primary mx-2"> Login via facebook</button> */}
                                <button onClick={signInUsingGithub} className="btn btn-block btn-outline-secondary"> Login via Github</button>
                            </p>

                            <form onSubmit={handleRegistration} className="px-5 m-auto w-50">
                                {/* <div className="form-group mb-2">
                                    <input onBlur={handleNameChange} name="" className="form-control" placeholder="Please Type Your Name" type="name" required/>
                                </div> */}
                                <div className="form-group mb-2">
                                    <input onBlur={handleEmailChange} name="" className="form-control" placeholder="Please Type Your Email " type="email" required/>
                                </div>
                                <div className="form-group mb-2">
                                    <span className="text-danger">{error}</span>
                                    <input onBlur={handlePasswordChange} name="" className="form-control" placeholder="*********" type="password" required/>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"></input>
                                    <label className="form-check-leble" htmlFor="gridCheck1">Alrdeady Register ?</label>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                             <button type="submit" className="btn btn-primary btn-block"> Registation </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="container m-auto text-center px-5 py-2">
                                <p className="text-danger">You Have al-ready account ?<Link to="/login" className="text-success pointer"> Login </Link></p>
                           </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registation
