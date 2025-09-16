import { useEffect, useState } from "react"
import useFetch from "./UseFetch";

let CustomHook = () =>
{
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    // useEffect(() =>
    // {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // }, [])

    // useEffect(()=>{
    //     console.log("My API Data: ", data)
    // }, [data])

    return(
        <>
        {data &&
            data.map((item)=>{
                return <p key={item.id}>{item.title}</p>
            })
        }
        </>
    );
}
 
export default CustomHook