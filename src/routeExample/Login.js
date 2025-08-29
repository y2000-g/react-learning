import EmailComponent from "./Component/EmailComponent";

let Login = () =>
{
    return <div>
        <h1> Login Page</h1>
        {/* <input type="text" placeholder="Enter Email/Phone number"/> */}
        <EmailComponent placeholder="Enter Email/Phone"/>
        <input type="password"/>
        <input type="submit" value={"Login"}/>
    </div>
}
export default Login;