import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const GithubProfile = () => {
    const data = useLoaderData();
    return (
        <>
            <h1 className='text-2xl bg-gray-400'>Name: {data.name}</h1>
            <h1 className='text-2xl bg-gray-400'>Followers: {data.followers}</h1>
            <div className='p-5'>
                <img className='mx-auto' src={data.avatar_url} alt="GitHub Profile Image" />
            </div>
        </>
    )
}

export default GithubProfile


export const getGithubProfile = async () => {
    const response = await fetch("https://api.github.com/users/rohit-p-droid");
    return response.json();
}