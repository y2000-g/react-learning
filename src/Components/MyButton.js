let MyButton = (Props)=>
{
    let handleClickTryme = ()=>
  {
    console.log("Try me is clicked")
  }

  let onButtonClick = ()=>
  {
    console.log("Button Click: ", document.getElementById(Props.buttonText).value)
    Props.callBack(document.getElementById(Props.buttonText).value)
  }
  return(
    <div>
      <input type="text" id={Props.buttonText} />
      <button onClick={onButtonClick}>{Props.buttonText}</button>
    </div>
  );

}
export default MyButton 