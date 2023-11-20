import "./style.css";
import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import whatsapp from "./../../img/icons/whatsapp.svg";
function Footer(){
    return(    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={instagram} alt="inst" /></a></li>
                    <li class="social__item"><a href="#!"><img src={whatsapp} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} /></a></li>

                </ul>
                <div className="copyright">
                    <p>Sincerely, Kuanysh</p>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;