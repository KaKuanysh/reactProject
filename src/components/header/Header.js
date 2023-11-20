import "./style.css";
import resume from './resume.docx';
function Header(){
    return(<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi <br/> I am <em> Kuanysh</em></strong><br/>
                a website developer
            </h1>
            <div className="header__text">
                <p>with a passion for creativity</p>
            </div>
            <a href={resume} download className="btn">Download CV</a>
        </div>
    </header>);
}

export default Header;