import React, { useState } from 'react'
import { useEffect } from 'react';
import signature from '../../../images/about/sign.png'
import AboutDes from './AboutDes';
import one from '../../../images/about/1.png'
import two from '../../../images/about/2.png'
import three from '../../../images/about/3.png'
import four from '../../../images/about/4.png'
import five from '../../../images/about/5.png'
import six from '../../../images/about/6.png'
import './About.css'

const About = () => {
    const [healths, setHealths] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setHealths(data.about))
    }, [])

    return (
        <>
            <section className="page-title">
                <div className="row">
                <div className="col-md-12">
                    <div className="text-center">

                        <h1 className="mb-5 text-lg text-light ">About Us</h1>
                    </div>
                </div>
            </div>
            </section>
            <section className="section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="title-color">Personal care for your healthy living</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>Let’s clear up one common misconception from the get-go: Self-care is not synonymous with self-indulgence or being selfish. Self-care means taking care of yourself so that you can be healthy, you can be well, you can do your job, you can help and care for others, and you can do all the things you need to and want to accomplish in a day.
                                <br/>If you think you’ve been hearing more about self-care now, you’re right. One indicator: According to Google Trends, the number of searches for “self-care” has more than</p>
                            <img src={signature} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fetaure-page">
                <div className="container">
                    <div className="row">
                        {
                        healths.map(health => <AboutDes key={health.code} health={ health }/>)
                        }
                    </div>
                </div>
            </section>
            <section className="section awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="title-color">Our Doctors achievements </h2>
                            <div className="divider mt-4 mb-5 mb-lg-0"></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={one} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={two} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={three} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={four} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={five} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={six} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="section-title">
                                <h2 className="mb-4">What they say about us</h2>
                                <div className="divider  my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 testimonial-wrap offset-lg-6">
                            <div className="testimonial-block">
                                <div className="client-info ">
                                    <h4>Amazing service!</h4>
                                    <span>John Partho</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>

                            </div>

                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Expert doctors!</h4>
                                    <span>Mullar Sarth</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
