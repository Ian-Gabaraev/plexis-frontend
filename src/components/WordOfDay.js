import React from "react";

function WordOfTheDay (prop) {

    return (
        <div className="card text-center">
            <div className="card-header">
                Word of the Day
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    {prop.word}
                </h4>
                <p className="card-text">
                    {prop.definition}
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