const Button = (prop)=>
{
    return <>
          <button onClick={prop.callback}>{prop.buttonText}</button>
    </>
}
export default Button 