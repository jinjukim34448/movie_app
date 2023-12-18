import {Link} from "react-router-dom";
import LoginControl from "./LoginControl";

function Header(){
    return(
        <div className="header_wrapper">
            <img
            className="image"
            style={{ width: "600px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"/>
            
            <div className="container">
            <span><Link to="./movies">영화</Link></span>
            <span><Link to ="./tv">TV프로그램</Link></span>
            <span><Link to ="./celebrity">인물</Link></span>
            <span>{<LoginControl/>}</span>
            <span><Link to ="./login"></Link></span>
            </div>
            
        </div>
    );
}
export default Header;