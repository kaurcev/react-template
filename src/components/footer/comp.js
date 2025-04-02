import { Link } from 'react-router-dom';
import './style.css';
import { useAppContext } from '../../Application';

const Footer = () => {

    const { appName, appAuthorMail } = useAppContext();

    const mailtogen = (email) => {
        return `mailto:${email}`;
    }

    return (
        <footer>
            <div className="footer">
                <div>
                    <span>{appName} 2025 <a href={mailtogen(appAuthorMail)}>{appAuthorMail}</a></span>
                </div>
                <div>
                    <Link to="/privacy">Политика конфиденциальности</Link>
                    <Link to="/cookies">Политика использования файлов cookie</Link>
                    <Link to="/termsofuse">Правила использования</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;