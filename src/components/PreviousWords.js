import React from "react";

const colsInARow = 3;
const backendUrl = "http://127.0.0.1:8000/api/all"

function getColCount(colSize) {
    return 12 / colSize
}

function trimString(string) {
    if (string.length > 53) {
        return string.slice(0, 53) + "..."
    }
    else {
        return string
    }
}

function PreviousWordCard(props) {

    return (
        <div className={"col-sm-" + props.colsize}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.word}</h5>
                    <p className="card-text">{props.definition}</p>
                    <a href="#" className="btn btn-primary">Add to vocab</a>
                </div>
            </div>
        </div>
    )
}

function PreviousWords() {
    const [
        dta = [],
        setDta
    ] = React.useState()

    React.useEffect(
        function () {
            fetch(backendUrl)
                .then(res => res.json())
                .then(data => setDta(data))
        }, []
    )

    const allCards = dta.map(
        wordDefPair => {
            return <PreviousWordCard
                word={wordDefPair["word"]}
                definition={trimString(wordDefPair["definition"])}
                colsize={getColCount(colsInARow)}
                key={wordDefPair["id"]}
            />
        }
    )

    return (
        <div className="row">
            {allCards}
        </div>
    )
}

export default PreviousWords;