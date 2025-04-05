import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const { username } = useParams();
    return (
        <div className='p-5 bg-gray-400 text-2xl'><strong>Username:</strong> {username}</div>
    )
}

export default Params