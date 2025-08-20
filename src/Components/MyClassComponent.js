import React from "react"
import MyChildComponent from "./MyChildComponent"

class MyClassComponent extends React.Component
{
    props
    state = 
    {
        counter: 0,
        ChildComponent: <MyChildComponent/>
    }

    constructor(props)
    {
        super()
        //console.log("-==Life Cycle Class Component==- Constructor")
        //console.log("Props in Class", props)
        this.props = props
    }

     static getDerivedStateFromProps(props, state)
    {
        //console.log("-==Life Cycle Class Component ==- getDerivedStateFromProps")
        return state
    }

     shouldComponentUpdate()
    {
       //console.log("-==Life Cycle Class Component==- shouldComponentUpdate")  
       if(this.state.counter == 5)
            return false
        else
            return true
    }

    incrementState = ()=>
    {
        this.setState({
            counter: ++this.state.counter,
            ChildComponent: <MyChildComponent/>
        })
    }

    removeChildComponent = ()=>
    {
        //console.log("RevomeChildComponent")
        this.setState(
            {
                counter: this.state.counter,
                ChildComponent: <h1>Removed Child Component</h1>
            })
    }
    // changeProp = ()=>
    // {
    //     this.props.color = "Black"
    // }  

    render()
    {
        //console.log("-==Life Cycle Class Component==- render")
        return(
            <div>
            <h1 style={{backgroundColor:this.props.color}}>This is My Class Component</h1>
            <label>{this.state.counter}</label>
            <button onClick={this.incrementState}>Increment Counter</button>
            {/* <button onClick={this.changeProp}>Change Prop</button> */}
            {this.state.ChildComponent}
            <button onClick={this.removeChildComponent}>Remove Child Component</button>
            </div>
            )
    }

     getSnapshotBeforeUpdate(prevProps, prevState)
    {
        //console.log("-==Life Cycle Class Component==- componentDidMount")
        //console.log("Current props : ", this.props)
        //console.log("Current Props : ", prevProps)
        //console.log("Current State : ", this.state1)
        //console.log("Current State : ", prevState)
    }

     componentDidUpdate()
    {
        //console.log("-==Life Cycle Class Component==- componentDidUpdate")
    }
    
    componentDidMount()
    {
        //console.log("-==Life Cycle Class Component==- componentDidMount")
    }


}
export default MyClassComponent