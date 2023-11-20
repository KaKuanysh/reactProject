function Contacts() {
    return(
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Selangor, Malaysia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">WhatsApp / Telegram</h2>
                        <p><a href="tel:+996778200588">+996 778 200 588</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="kkabataj@mail.ru">kkabataj@mail.ru</a></p>
                    </li>
                </ul>

        </div>
    </main>);
}
export default Contacts;