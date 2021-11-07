import React from 'react'
import useAuth from '../../../hooks/useAuth'


const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useAuth();

    const handleEmailChange = (e) => {
        console.log(e.target.value);
    }
    const handlePasswordReceived = (e) => {
        console.log(e.target.value);
    }

    const handleRegistration = (e) => {
        console.log('registation willed added');
        e.preventDefault();
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
                            <hr />
                            <form onSubmit={handleRegistration} className="px-5 w-50 m-auto">
                                <div className="form-group mb-2">
                                    <input onBlur={handleEmailChange} name="" className="form-control" placeholder="Email or login" type="email"/>
                                </div>
                                <div className="form-group mb-2">
                                    <input onBlur={handlePasswordReceived} name="" className="form-control" placeholder="*********" type="password"/>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                             <button type="submit" className="btn btn-primary btn-block"> Register </button>
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
