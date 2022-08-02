import React from "react";

const backendUrl = "http://127.0.0.1:8000/api/wod"

function WordOfTheDay () {

    const [
        dta={word: "Word", definition: "Definition"},
        setDta
    ] = React.useState()

    React.useEffect(function () {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => setDta(data))
    }, [])

    return (
        <div className="card text-center">
            <div className="card-header">
                Word of the Day
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    {dta.word}
                </h4>
                <p className="card-text">
                    {dta.definition}
                </p>
                <button type="button" className="btn btn-primary">Save</button>
            </div>
            <div className="card-footer text-muted">
                Mastered by 63% of students
            </div>
        </div>
    )
}

export default WordOfTheDay;