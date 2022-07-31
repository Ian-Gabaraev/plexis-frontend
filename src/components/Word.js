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
                <a href="#" className="btn btn-primary">Save</a>
            </div>
            {/*<div className="card-footer text-muted">*/}
            {/*    2 days ago*/}
            {/*</div>*/}
        </div>
    )
}

export default WordOfTheDay;