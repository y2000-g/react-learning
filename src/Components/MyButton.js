import { useState } from "react"

let MyButton = (Props)=>
{
  let [counter, setCounterr] = useState({
    name: "nanonbsnd bljo",
    rollNumber: 25,
    contact: 234567891,
    address: "101 digbovnf bhawarkua indore" 
  })
  console.log("Counter: ", counter)
  
    let handleClickTryme = ()=>
  {
    console.log("Try me is clicked")
  }

  let onButtonClick = ()=>
  {
    setCounterr(
      {
        ...counter, name:"Yashita"
      }
    )
    console.log("Button Click: ", document.getElementById(Props.buttonText).value)
    Props.callBack(document.getElementById(Props.buttonText).value)
  }
  return(
    <div>
      <label>Color: {counter.name}</label><br/>
      <label>Color: {counter.rollNumber}</label><br/>
      <label>Color: {counter.contact}</label><br/>
      <label>Color: {counter.address}</label><br/>
      <input type="text" id={Props.buttonText} />
      <button onClick={onButtonClick}>{Props.buttonText}</button>
    </div>
  );

}
export default MyButton 