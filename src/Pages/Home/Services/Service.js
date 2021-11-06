import React from 'react'

const Service = ({ service }) => {
    console.log(service);
    const { serv_des, serv_img, serv_n } = service;
    return (
        <div className="col-sm-12 col-md-4 gap-5 mb-3">
            <div className="img-thumbnail px-2 onl">
                <img className="img-fluid rounded" src={serv_img} alt="" />
                <div className="py-3 px-2 mb-3">
                    <h3>{serv_n}</h3>
                    <p>{serv_des.slice(0, 150) }</p>
                </div>
            </div>
        </div>
    )
}

export default Service
