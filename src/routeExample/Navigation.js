import { Link, Outlet } from "react-router-dom";
import "./Styling/Navigation.css"

let Navigation = () =>
{
    // let myStylingObject = {
    //     margin:"10px", 
    //     padding:"10px"
    // }
    // let myLinkStyle = {
    //     margin:"8px"
    // }
    return(<div>
        <nav>
            <div 
            // style={myStylingObject}
            >
                <Link to="/" className="linkStyle"
                // style={myLinkStyle}
                >Login</Link>
                <Link to="/signup" 
                // style={myLinkStyle}
                >Signup</Link>
                <Link to="/profile" 
                // style={myLinkStyle}
                >Profile</Link>
                <Link to="/dashBoard" 
                // style={myLinkStyle}
                >DashBoard</Link>
            </div>
            
            {/* <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                 <li>
                    <Link to="/profile">Profile</Link>
                </li>
                 <li>
                    <Link to="/dashBoard">DashBoard</Link>
                </li>
            </ul> */}
        </nav>
        <Outlet/>
    </div>)
}
export default Navigation;