import { Link, useNavigate } from "react-router-dom";
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
                    <nav>
                        <Link to="/privacy">Конфиденциальность</Link>
                        <Link to="/cookies">Cookie</Link>
                        <Link to="/termsofuse">О использовании</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
