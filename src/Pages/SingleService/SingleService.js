import React from 'react'
import { useParams } from 'react-router'

const SingleService = () => {
    const { serveeId } = useParams();
    return (
        <div className="container text-center">
            <h1>Our Service Details :{ serveeId }</h1>
        </div>
    )
}

export default SingleService
