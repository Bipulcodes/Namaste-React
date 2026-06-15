import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
const Header = () => {
    const [btnNamereact , setbtnNamereact] = useState("Login")
    //let btnName = "Login"    
    return(
        <div className="header">
            <div className="imagelogo">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    
                    <button className="login" onClick={
                        ()=>{if(btnNamereact == "Login") {setbtnNamereact("Logout")}
                            else setbtnNamereact("Login")
                        //console.log(btnNamereact);
                        
                    }}>{btnNamereact}</button>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
