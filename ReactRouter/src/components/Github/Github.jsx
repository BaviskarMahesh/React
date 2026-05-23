import React, { useEffect ,useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BaviskarMahesh')
    //     .then(response=>response.json())
    //     .then(data=> {console.log(data);
    //         setData(data)
    //     })

    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-2 text-2xl">Github Name:{data.name} 
        <div className="text-center m-4 bg-gray-600 text-white p-2 text-2xl">Github Followers:{data.followers} 
            <img   src={data.avatar_url} alt="Git picture" width={300}></img>
        </div>
        </div>
        
    )
}

export const githubInfoLoader=async()=>{
    const response =await fetch('https://api.github.com/users/BaviskarMahesh')
    return response.json()
}   