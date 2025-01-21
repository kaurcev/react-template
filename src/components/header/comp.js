import { useNavigate } from "react-router-dom";
import logo from '../../imgs/logo.svg';
import './style.css';


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="header">
                    <div className="logobar">
                    	<img className="logo" src={logo} alt="logo" onClick={()=> navigate("/")} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
