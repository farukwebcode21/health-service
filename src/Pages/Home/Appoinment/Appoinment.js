import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Appoinment.css'
const Appoinment = () => {
    return (
        <div>
            <section className="page-title">
                <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <span className="text-white">Book your Seat</span>
                        <h1 className="mb-5 text-lg text-light ">Appoinment</h1>
                    </div>
                </div>
            </div>
            </section>
            <section className="appoinment section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <div className="feature-icon mb-3">
                                    <i className="text-lg"><FontAwesomeIcon icon={faHeadset} /></i>
                                </div>
                                <span className="h3">Call for an Emergency Service !</span>
                                <h2 className="text-color mt-3">+88017440000</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                            <h2 className="mb-2 title-color">Book an appoinment</h2>
                            <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                            <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Choose Department</option>
                                                <option>Software Design</option>
                                                <option>Development cycle</option>
                                                <option>Software Development</option>
                                                <option>Maintenance</option>
                                                <option>Process Query</option>
                                                <option>Cost and Duration</option>
                                                <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2">
                                                <option>Select Doctors</option>
                                                <option>Software Design</option>
                                                <option>Development cycle</option>
                                                <option>Software Development</option>
                                                <option>Maintenance</option>
                                                <option>Process Query</option>
                                                <option>Cost and Duration</option>
                                                <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <input name="time" id="time" type="text" className="form-control" placeholder="Time"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Full Name"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                                    </div>
                                    <a className="btn btn-main btn-round-full" href="#confirmation.html">Make Appoinment<i className="icofont-simple-right ml-2"></i></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Appoinment
