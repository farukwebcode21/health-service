import React from 'react'
import { useParams } from 'react-router'

const SingleDoctor = () => {
    const { singleId} = useParams();
    return (
        <div className="container text-center">
            <h4>This is single doctors:{ singleId}</h4>
        </div>
    )
}

export default SingleDoctor
