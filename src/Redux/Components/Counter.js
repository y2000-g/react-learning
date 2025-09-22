import { useState } from "react"
import Button from "./Button"
import Label from "./Label"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../actions"

const Counter = ()=>
{
    //  const [count, setCount] = useState(0)
    const count = useSelector((state) => state.count )
    const dispatch = useDispatch()


    return <div>
        <Label text={"Count: "+count}/>
        <br/>
        {/* <Button 
        callback={()=>{setCount(count+1)}} 
        buttonText="Increment"/> */}
         <Button 
            callback={()=>{dispatch(increment())}} 
            buttonText="Increment"/>
        <br/>
        <Button 
            callback={()=>{dispatch(decrement())}} 
            buttonText="Decrement"/>
    </div>
}
export default Counter