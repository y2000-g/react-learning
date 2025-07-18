import React from "react"

class MyClassComponent extends React.Component
{
    props
    state1 = {counter:0}
    constructor(props)
    {
        super()
        console.log("-==Life Cycle==- Constructor")
        console.log("Props in Class", props)
        this.props = props
    }
    incrementState = ()=>
    {
        this.setState({counter: ++this.state1.counter})
    }
    
    static getDerivedStateFromProps(props, state1)
    {
        console.log("-==Life Cycle==- getDerivedStateFromProps")
        return state1
    }

    shouldComponentUpdate()
    {
       console.log("-==Life Cycle==- shouldComponentUpdate")  
       if(this.state1.counter == 5)
            return false
        else
            return true
    }

    render()
    {
        console.log("-==Life Cycle==- render")
        return(
            <div>
            <h1 style={{backgroundColor:this.props.color}}>This is My Class Component</h1>
            <label>{this.state1.counter}</label>
            <button onClick={this.incrementState}>Increment Counter</button>
            </div>
            )
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("-==Life Cycle==- componentDidMount")
        console.log("Current props : ", this.props)
        console.log("Current Props : ", prevProps)
        console.log("Current State : ", this.state1)
        console.log("Current State : ", prevState)
    }

    componentDidUpdate()
    {
        console.log("-==Life Cycle==- componentDidUpdate")
    }
    componentDidMount()
    {
        console.log("-==Life Cycle==- componentDidMount")
    }
}
export default MyClassComponent