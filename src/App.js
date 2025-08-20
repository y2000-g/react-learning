
import './App.css';
import React, { useState } from 'react';
import MyButton from './Components/MyButton';
import MyComponent from './Components/MyComponent';
import MyClassComponent from './Components/MyClassComponent';
import MyChildComponent from './Components/MyChildComponent';

function App(props) 
{
  console.log("Props: ", props)
  console.log("Hello React !!!")
  // let array = [1, 2, 3, 4, 5, 6, 7, 8]
  // console.log("Size of an array:"+array.length)

  // function myfunction()
  // {
  //   console.log("myfunction")
  // }
  // myfunction()

  // let myFunctionVariable = () =>
  // {
  //   console.log("myFunction is excuted!!")
  // }
  // myFunctionVariable()
  // console.log("My Arrow function"+myFunctionVariable)

  // var promiseResultVar = 1 
  // let promiseFunction = (resolve, reject) =>
  // {
  //   setTimeout(()=>
  //   {
  //     if(promiseResultVar == 0)
  //     {
  //       resolve("Promise is resolve")
  //       console.log("Promise is resolve")
  //     }
  //     else
  //     {
  //       reject("Promise is rejected")
  //       alert("API Failed")
  //     }
  //   }, 3*1000)
  // }

  // let Mypromise = new Promise(promiseFunction)
  // console.log("Promise result:"+Mypromise)

  // var promiseResultVar = 0
  // let promiseFunction
// (resolve, reject) can be anything like (yashita, yashii)
//   let Mypromise = new Promise((resolve, reject) =>
//   {
//     setTimeout(()=>
//     {
//       if(promiseResultVar == 0)
//       {
//         resolve("Promise is resolve") // Another way -> Simply code resolve() and reject() Work same
//         console.log("Promise is resolve")
//       }
//       else
//       {
//         reject("Promise is rejected")
//         alert("API Failed")
//       }
//     }, 3*1000)
//   }
// )
//   console.log("Promise result:"+Mypromise)

//   Mypromise.then(()=>
//   {
//     console.log("After promise resolve then!!")
//   })

//   Mypromise.catch(()=>
//   {
//     console.log("This is catch after the rejection of promise")
//   })

  // class Student
  // {
  //   name 
  //   age
  //   class_std
  //   marks

  //   calculateAverage()
  //   {
  //     console.log("Marks average to be calculated....")
  //   }
    // constructor()
    // {
    //   console.log("Constructor is called")
    // }
  //   constructor(name, age, class_std, marks)
  //   {
  //     this.name = name
  //     this.age = age
  //     this.class_std = class_std
  //     this.marks = marks

  //      console.log("Name",name)
  //     console.log("age", age)
  //     console.log("Class_STD", class_std)
  //     console.log("marks", marks)
  //     console.log("Constructor is called")
  //   }
  //   printDetails()
  //   {
  //     console.log("Name", this.name)
  //     console.log("age", this.age)
  //     console.log("Class_STD", this.class_std)
  //     console.log("marks", this.marks)
  //   }
  //   calculate()
  //   {
  //     let sum = 0
  //     for(let index = 0; index<this.marks.length; index++)
  //     {
  //       sum += this.marks[index]
  //     }
  //     console.log("The Avg marks for "+this.name+" is:", (sum/this.marks.length))

  //   }
  // }
  // console.log("Object is creating")
  // let yashita = new Student("Yashita gole", 24, "B.tech", [10, 20 ,50 , 60] )
  // console.log("Object is created")
  // // yashita.name = "Yashita gole"
  // // yashita.age = 25
  // // yashita.class_std = "B.tech"
  // // yashita.marks = [10, 20 ,50 , 60]
  // console.log("Data of Yashita's info", yashita)
  // yashita.printDetails()
  // yashita.calculate()

  // class Vehicle  // parent class, super class
  // {
  //   capacity
  //   source
  //   destination

  //   constructor(capacity, source, destination)
  //   {
  //     console.log("Called Vehicle construtor");
  //     this.capacity = capacity
  //     this.source = source
  //     this.destination = destination
  //   }
  //   takeFromSourceToDestination()
  //   {
  //     console.log("taking from Source...")
  //     console.log("reached the destination...");      
  //   }

  //   print()
  //   {
  //     console.log("capacity: ", this.capacity)
  //     console.log("Source: ", this.source)
  //     console.log("destination: ", this.destination )
  //   }
  // }

  // class RoadVehicle extends Vehicle  // child class derived class
  // {
  //   wheelerCapacity
  //   fuelType
  //   currentKmsRun

  //   constructor(wheelerCapacity, fuelType, currentKmsRun)
  //   {
  //     super()
  //     console.log("Called RoadVehicle Constructor")
  //     this.wheelerCapacity = wheelerCapacity
  //     this.fuelType = fuelType
  //     this.currentKmsRun = currentKmsRun
  //   }
  //   refule()
  //   {
  //     console.log("Refuling...")
  //     console.log("Done Refuling!");
      
  //   }

  //   print()
  //   {
  //     super.print()
  //     console.log("WheelerCapacity: ", this.wheelerCapacity);
  //     console.log("FuelType: ", this.fuelType)
  //     console.log("currentKmsRuns: ", this.currentKmsRun)
  //     console.log("------------------"); 
  //     console.log("capacity:", this.capacity)
  //   }
  // }
  // let bus = new RoadVehicle()
  // bus.capacity = 50 //people
  // bus.source = "Thikri"
  // bus.destination = "Indore"
  // bus.wheelerCapacity = 8
  // bus.fuelType = "petrol"
  // bus.currentKmsRun = 1500
  // bus.refule()
  // bus.takeFromSourceToDestination()
  // bus.print()

  // let newElement = <button>Hello!</button>
  // console.log("NewElement : ", newElement)
  // console.log("NewElement : "+newElement)

  // return React.createElement
  // (
  //   "div",
  //   null,
  //   React.createElement("p", null, "This is a simple list"),
  //   React.createElement("ul", null, ),
  //   React.createElement("li", null, "This is list item 1 "),
  //   React.createElement("li", null, "This is list item 2"),
  // );

  function handleClickTryme()
  {
    console.log("Try me is clicked")
  }

  // Call Back function
  let myButtonCallBack = (text)=>
  {
    console.log("------------")
    console.log("This is callback function", text)
    console.log("---------------")
  }

  let myFunction = () =>
  {
    console.log("Caling Function Working") 
    
    let myArray = ["A", 1, 2, 4.5, true, ()=>{
      console.log("Calling function from Array")
      return 5
    }]
      console.log(myArray[5]())
      console.log(myArray[5])
  }

  let myObject = {
    one: "One",
    two: 2,
    three: true,
    fun: ()=>{
      console.log("Calling function from myObject");
      
    }
  }

  console.log(myObject.one)
  console.log(myObject.two)
  console.log(myObject.three)
  console.log(myObject.fun)
  console.log(myObject.fun())

  var a= 1
  var b = a
  // copy of value = 1

  let myObject1 = myObject
  myObject1 = Object.assign({}, myObject)

  myObject.one = "1one1"

  console.log("myObject.one", myObject.one)
  console.log("myobje1.one", myObject1.one)

  // Topic - Closure
  function makeHelloFunction()
  {
    const message = "Hello!!"

    function sayHello()
    {
      console.log(message)
    }
    return sayHello
  }
  const sayHello = makeHelloFunction()
  // console.log(message)
  // makeHelloFunction()()
  sayHello()
 
  // Coercion or Type Casting
  var x = 42
  console.log(typeof(x))
  const explicit = String(x)
  console.log("Implicit ", typeof(explicit))
  const implicit = x +""
  console.log("Eplicit ", typeof(implicit))

  //Form validation
  let handleFormSubmit = (event)=>
  {
    event.preventDefault()
    console.log("Hello form submission")
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let dob = document.getElementById("dob").value
    let genderMaleInput = document.getElementById("genderMaleInput").checked
    let genderfemaleInput = document.getElementById("genderfemaleInput").checked
    let genderOtherInput = document.getElementById("genderOtherInput").checked
    console.log("Name: ", name)
     console.log("Email: ", email)
     console.log("DOB: ", dob)
     console.log("genderMaleInput: ", genderMaleInput)
     console.log("genderMfemleInput: ", genderfemaleInput)
     console.log("genderOtherInput: ", genderOtherInput)
     if(genderMaleInput || genderfemaleInput || genderOtherInput)
     {
        alert("Form Submitted")
     }
     else
     {
        alert("Please Select gender")
     }    
  }

  return(
    <div style={{backgroundColor:props.color}}>
      {/* <button onClick={()=>{handleClickTryme()}}>Try me:</button> */}
      {/* <button onClick={handleClickTryme}>Try me:</button> */}
      <MyButton buttonText="Try me Dinamically!" callBack={myButtonCallBack}/>
      <MyButton buttonText="Button1" callBack={myButtonCallBack}/>
      <MyButton buttonText="Button2" callBack={myButtonCallBack}/>
      <MyButton buttonText="Button3" callBack={myButtonCallBack}/> {/* Reusable Component */}
      <MyComponent/>
      <MyClassComponent color="grey"/>
      <button onClick={myFunction}>Calling Function</button>
      <br/>
      <fieldset>
        <legend>Sign up!!</legend>
        <form onSubmit={handleFormSubmit}>
          <h2>Sign up Form</h2>
          <div>
            <label>Name:</label><br/>
            <input placeholder='Enter your name here....' required id='name'/>
          </div><br/><br/>

          <div>
            <label>Email ID:</label><br/>
            <input placeholder='Enter your Email....' required id='email'/>
          </div><br/><br/>

          <div>
            <label>DOB</label><br/>
            <input type='Date' required id='dob'/>
          </div><br/><br/>

          <div>
            <label>Gender:</label><br/>
            <input type='radio' name='genderRadioGroup' id='genderMaleInput'/><label>Male</label><br/>
            <input type='radio' name='genderRadioGroup'id='genderfemaleInput'/><label>female</label><br/>
            <input type='radio' name='genderRadioGroup' id='genderOtherInput'/><label>others</label><br/>
          </div><br/><br/>

          <input type='submit' value='Sign up'/>
        </form>
      </fieldset>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         111 <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       {newElement       }
  //     </header>
  //   </div>
  // );
}

export default App;
