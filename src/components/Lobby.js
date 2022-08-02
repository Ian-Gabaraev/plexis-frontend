function Lobby() {
    return (
        <form style={{marginLeft: "50px", marginRight: "50px", marginTop: "30px"}}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Message</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default Lobby