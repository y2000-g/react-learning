import { useEffect, useRef, useState } from "react"

let UseRef = ()=>
{
    const [inputValue, setInputvale] = useState("")
    const count = useRef(0)

    let myInput = useRef(0)
    // useEffect - gets called when state value's updated
     useEffect(()=>
    {
        count.current = count.current +1
        console.log("myInput.current.value: ", myInput.current.value)
    }) 

    const previousInputValue = useRef("");

    useEffect(()=>
    {
        console.log("inputValue: ", inputValue)
        console.log("previousInputValue: ", previousInputValue)// use the previous state first 
       previousInputValue.current = inputValue // update the previous state for the next use
    }, [inputValue]) 



    return (
    <>
        <input
            ref={myInput}
            type="text"
            value={inputValue}
            onChange={(e)=> setInputvale(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
        <h2>Current value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
    </>
    );
}
export default UseRef;