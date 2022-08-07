function MenuItem(props) {
    return (
        <div className="col-sm-6" style={{marginBottom: "20px"}}>
            <div className="card">
                <div className="card-body" style={{backgroundColor: "rebeccapurple", color: "whitesmoke"}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.href} className="btn">
                        <i className="bi bi-arrow-right-circle" style={{fontSize: "2rem", color: "white"}}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function StudyMenu () {
    // The tiles
    return (
        <div className="row">
            <MenuItem title="My vocabulary"
                      text="Examine and edit your vocabulary list" href="vocabulary"/>
            <MenuItem title="Thesaurus"
                      text="Discover new words and expand your vocabulary" href="thesaurus"/>
            <MenuItem title="My vocabulary"
                      text="Examine and edit your vocabulary list" href="vocabulary"/>
            <MenuItem title="My vocabulary"
                      text="Examine and edit your vocabulary list" href="vocabulary"/>
        </div>
    )
}