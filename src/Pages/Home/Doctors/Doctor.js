import React from 'react'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const {id, img, name, specilist } = doctor;
    return (
         <div className="col-md-4 g-4">
            <div className="text-center">
                <div className="doctor-img">
                    <img src={img} alt="" className="img-fluid img-thumbnail rounded"/>
                </div>
                <div className="content mt-3">
                    <h4 className="mb-0"><Link to={`/singledoctor/${id}`}>{ name}</Link></h4>
                    <p>{ specilist}</p>
                </div>
            </div>
         </div>
    )
}

export default Doctor
