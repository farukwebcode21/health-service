import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <article className="card-body py-5 px-5">
                            <h4 className="card-title mb-4 mt-1 text-center text-uppercase">Please Login First</h4>
                            <p className="text-center">
                                <button onClick={signInUsingGoogle} className="btn btn-block btn-outline-info mx-2">Login via Google</button>
                                <Link to="#" className="btn btn-block btn-outline-primary mx-2"> Login via facebook</Link>
                                <Link to="#" className="btn btn-block btn-outline-secondary"> Login via Github</Link>
                            </p>
                            <hr />
                            <form className="px-5 w-50 m-auto">
                                <div className="form-group mb-2">
                                    <input name="" className="form-control" placeholder="Email or login" type="email"/>
                                </div>
                                <div className="form-group mb-2">
                                    <input name="" className="form-control" placeholder="*********" type="password"/>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                             <button type="submit" className="btn btn-primary btn-block"> Login </button>
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
