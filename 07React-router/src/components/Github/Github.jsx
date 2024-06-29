import React, { useEffect, useLayoutEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Puzzling762')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
            
        })
    },[])
    return (
        <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'>Github Username: {data.login}
        <img className='m-auto' src={data.avatar_url} alt="Git picture" width={300} />
        Github Repositories: {data.public_repos} <br />
        Github Followers:{data.followers}

        </div>
    )
}

export default Github
