/* Prop Drilling- When we have nested components  like -> Comp 1 -> 2 -> 3 -> 4 -> 5
Date is passed from Component 1  to Component 5 with the help of all mid level Components like 2, 3,4 
Here 2, 3, 4 Components are not utilising the prop data but only passing it along */

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Main()
{
    const[count, setCount] = useState(0);

    return <UserContext.Provider value={count}>
        <>
            <h1>Hello, This is main Component</h1>
            <Component1/>
        </>
    </UserContext.Provider>
    
}

function Component1()
{
    return <>
        <h2>Component 1</h2>
        <Component2/>
    </>
}

function Component2()
{
    return <>
        <h2>Component 2</h2>
        <Component3/>
    </>
}

function Component3()
{
    return <>
        <h2>Component 3</h2>
        <Component4/>
    </>
}

function Component4()
{
    return <>
        <h2>Component 4</h2>
        <Component5/>
    </>
}

function Component5()
{
    let count = useContext(UserContext)
    return <>
        <h2>Component 5</h2>
        <h3>{`Hello Count's value is: ${count}`}</h3>
    </>
}
export default Main;