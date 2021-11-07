import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { key, serv_des, serv_img, serv_n } = service;
    return (
        <div className="col-sm-12 col-md-4 gap-5 mb-3">
            <div className="img-thumbnail px-2 onl">
                <img className="img-fluid rounded" src={serv_img} alt="" />
                <div className="py-1 px-2 mb-2">
                    <h3>{serv_n}</h3>
                    <p>{serv_des.slice(0, 150)}</p>
                    <Link to={`/SingleServices/${key}`} className="btn btn-outline-secondary">Details</Link>
                </div>
            </div>

        </div>
    )
}

export default Service
