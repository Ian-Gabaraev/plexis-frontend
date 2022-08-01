import React from "react";
import Paginator from "./Paginator";

const colsInARow = 3;
const maxCardsOnAPage = 6;
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
    const defaultButtonText = "Add"
    const defaultButtonStyle = "btn-primary"

    const [actionDescription, setActionDescription] = React.useState(defaultButtonText)
    const [buttonStyle, setButtonStyle] = React.useState(defaultButtonStyle)

    function handleWordSaved() {
        // Change button style and text when clicked
        if (actionDescription === defaultButtonText) {
            setActionDescription("Added")
            setButtonStyle("btn-success")
        }
        else {
            setActionDescription(defaultButtonText)
            setButtonStyle(defaultButtonStyle)
        }
    }

    return (
        <div className={"col-sm-" + props.colsize} style={{marginBottom: "15px"}}>
            <div className="card" style={{height: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.word}</h5>
                    <p className="card-text">{props.definition}</p>
                    <button
                        type="button"
                        className={"btn " + buttonStyle}
                        onClick={handleWordSaved}
                    >{actionDescription}</button>
                </div>
            </div>
        </div>
    )
}

function PreviousWords() {
    const [dta, setDta] = React.useState([])

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
            <Paginator
                count={allCards.length}
                max={maxCardsOnAPage}
            />
        </div>
    )
}

export default PreviousWords;