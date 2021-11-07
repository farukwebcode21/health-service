import React from 'react'

const AboutDes = ({ health }) => {
    const { name, img, descrion } = health;
    return (
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={img} alt="" className="img-fluid w-100"></img>
                <h4 className="mt-3">{name }</h4>
                <p>{ descrion.slice(0, 120)}</p>
            </div>
    )
}

export default AboutDes
