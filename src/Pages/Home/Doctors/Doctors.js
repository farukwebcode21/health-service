import React, { useEffect, useState } from 'react'
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setDoctors(data.doctors));
    },[])
    return (
        <>
        <section className="section doctors">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Doctors</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque </p>
                        </div>
                    </div>
                </div>

                <div className="row shuffle-wrapper portfolio-gallery">
                    <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={ doctor}/>)
                    }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Doctors
