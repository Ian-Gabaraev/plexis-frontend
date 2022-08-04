function H3Badge(props) {
    return (
        <div style={{marginBottom: "20px"}}>
            <h3>My vocabulary&nbsp;<span className="badge bg-secondary">{props.count}</span></h3>
        </div>
    )
}

function RemoveButton() {
    return (
        <div style={{marginTop: "20px"}}>
            <button type="button" className="btn btn-danger">Remove</button>
        </div>
    )
}

function VocabularyCard(props) {
    return (
        <div className="card">
            <div className="card-header">
                Abacus
            </div>
            <div className="card-body">
                <p>
                    {props.data}
                </p>
                <blockquote className="blockquote mb-0">
                    <p>"I may as well have given them an abacus and asked them to do algebra."</p>
                    <footer className="blockquote-footer">thodgson in <cite title="Source Title">Outside Online</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default function VocabularyList() {

    const loreIpsumText = "a simple device for calculating, consisting of a frame with " +
        "rows of wires or grooves along which beads are slid."

    return (
        <div className="row">
            <H3Badge count={323}/>
            <div className="col-3">
                <div className="list-group" id="list-tab" role="tablist">

                    <a className="list-group-item list-group-item-action active" id="list-home-list"
                       data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Abacus</a>

                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"
                       href="#list-profile" role="tab" aria-controls="list-profile">Albeit</a>

                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list"
                       href="#list-messages" role="tab" aria-controls="list-messages">Augment</a>

                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
                       href="#list-settings" role="tab" aria-controls="list-settings">Atrocious</a>
                </div>
            </div>

            <div className="col-9">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                         aria-labelledby="list-home-list"><VocabularyCard data={loreIpsumText}/>
                    </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel"
                         aria-labelledby="list-profile-list">...
                    </div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel"
                         aria-labelledby="list-messages-list">...
                    </div>
                    <div className="tab-pane fade" id="list-settings" role="tabpanel"
                         aria-labelledby="list-settings-list">...
                    </div>
                </div>
                <RemoveButton/>
            </div>
        </div>
    )
}