import ExampleSentence from "./Example";
import React from "react";

function H3Badge(props) {

    return (
        <div style={{marginBottom: "20px"}}>
            <h3>Thesaurus&nbsp;<span className="badge bg-secondary">{props.count}</span></h3>
        </div>
    )
}

function AddButton() {

    return (
        <div style={{marginTop: "20px"}}>
            <button type="button" className="btn btn-primary">Add</button>
        </div>
    )
}

function VocabularyCard(props) {

    const examples = props.examples.map(
        example => {
            return <ExampleSentence
                sentence={example.text}
                author={example.author}
                source={example.source}
                key={example.id}
            />
        }
    )

    return (
        <div className="card">
            <div className="card-header">
                {props.word}
            </div>
            <div className="card-body">
                <p>
                    {props.definition}
                </p>
                {examples}
            </div>
        </div>
    )
}

function ListElement(props) {

    const className = "list-group-item list-group-item-action"

    return (
        <a className={props.active ? className + " active" : className}
           id={props.id}
           data-bs-toggle="list"
           href={"#" + props.aria}
           role="tab"
           aria-controls={props.aria}>
            {props.word}
        </a>
    )
}

function Browser(props) {

    const className = props.active ? "tab-pane fade show active" : "tab-pane fade"

    return (
        <div className={className}
             id={props.id}
             role="tabpanel"
             aria-labelledby={props.labeledby}
        >
            {props.vocabularyCard}
        </div>
    )
}

export default function Thesaurus() {

    const backendUrl = "http://127.0.0.1:8000/api/all"
    const [dta, setDta] = React.useState({"results": []})

    React.useEffect(
        function () {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => setDta(data))
        }, []
    )

    const allElements = dta.results.map(
        entry => {
            return <ListElement
                word={entry.word}
                id={"list-home-list-" + entry.id}
                aria={entry.word}
                key={entry.id}
            />
        }
    )

    const allBrowsers = dta.results.map(
        entry => {
            return <Browser
                key={entry.id}
                vocabularyCard={
                    <VocabularyCard
                        definition={entry.definition}
                        word={entry.word}
                        examples={entry.examples}
                    />
                }
                id={entry.word}
                labeledby={"list-home-list-" + entry.id}/>
        }
    )

    return (
        <div className="row">
            <H3Badge count={dta.count}/>

            <div className="col-3">
                <div className="list-group" id="list-tab" role="tablist">
                    {allElements}
                </div>
            </div>

            <div className="col-9">
                <div className="tab-content" id="nav-tabContent">
                    {allBrowsers}
                </div>
                <AddButton/>
            </div>

        </div>
    )
}