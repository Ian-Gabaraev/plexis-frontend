import React from "react";
import ExampleSentence from "./Example";

const backendUrl = "http://127.0.0.1:8000/api/wod"

function BookMark() {
    const [bookMarkIcon, setBookMarkIcon] = React.useState("bi bi-bookmark")

    function switchIcon() {
        setBookMarkIcon("bi bi-bookmark-fill")
    }

    return (
        <a href="#" className="btn" onClick={switchIcon}>
            <i className={bookMarkIcon} style={{fontSize: "2rem", color: "rebeccapurple"}}></i>
        </a>
    )
}

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
                <ExampleSentence
                    sentence="I may as well have given them an abacus and asked them to do algebra."
                    author="thodgson in "
                    source="Outside Online"
                />
                    <BookMark/>
            </div>
            <div className="card-footer text-muted">
                Mastered by 63% of students
            </div>
        </div>
    )
}

export default WordOfTheDay;