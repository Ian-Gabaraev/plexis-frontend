function MenuItem() {
    return (
        <div className="col-sm-6" style={{marginBottom: "20px"}}>
            <div className="card">
                <div className="card-body" style={{backgroundColor: "rebeccapurple", color: "whitesmoke"}}>
                    <h5 className="card-title">My vocabulary</h5>
                    <p className="card-text">Examine and edit your vocabulary list</p>
                    <a href="vocabulary" className="btn">
                        <i className="bi bi-arrow-right-circle" style={{fontSize: "2rem", color: "white"}}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function StudyMenu () {
    return (
        <div className="row">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    )
}