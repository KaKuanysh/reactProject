import Header from "./../components/header/Header";

function Home() {
    return(
    <>
    <Header/>
    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Front-End</h2>
                        <p>JavaScript, ReactJS,  HTML, CSS, BootStrap</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Back-End</h2>
                        <p>Django, JavaScript, MySQL</p>
                    </li>
                </ul>

        </div>
    </main>
    </>
    );
}
export default Home;