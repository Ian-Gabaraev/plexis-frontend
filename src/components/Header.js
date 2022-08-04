export default function Header() {
    return (
        <header className="pb-3 mb-4 border-bottom">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">

                    <a className="navbar-brand" href="home">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                             alt=""
                             width="30"
                             height="24"
                             className="d-inline-block align-text-top"/>
                        &nbsp;pLexis
                    </a>

                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active"
                                   aria-current="page"
                                   href="home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="/practice">Practice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="/study">Study</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled"
                                   href="/compete">Compete</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}
