import React from "react"

class MyChildComponent extends React.Component
{
     constructor(props)
    {
        super()
        console.log("-==Life Cycle Child Component==- Constructor")
    }

     render()
    {
        console.log("-==Life Cycle child Component==- render")
        return(
                <div>
                    <h1>This is My Child Class Component</h1>
                </div>
            )
    }

     componentDidUpdate()
    {
        console.log("-==Life Cycle child Component==- componentDidUpdate")
    }
    
    componentDidMount()
    {
        console.log("-==Life Cycle child Component==- componentDidMount")
    }

    componentWillUnmount()
    {
        console.log("-==Life Cycle child Component==- componentWillUnmount")
    }

}
export default MyChildComponent