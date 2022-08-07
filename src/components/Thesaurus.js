import ExampleSentence from "./Example";
import React from "react";


function AntonymButton(props) {

    return (
        <button type="button"
                className="btn btn-danger"
                style={{marginLeft: "5px", marginRight: "5px"}}
        >
            {props.word}
        </button>
    )
}


function AntonymsBlock(props) {

    const buttons = props.antonyms.map(
        word => {
            return <AntonymButton word={word}/>
        }
    )

    return (
        <div style={{marginBottom: "20px"}}>
            {buttons}
        </div>
    )
}


function SynonymButton(props) {

    return (
        <button type="button"
                className="btn btn-success"
                style={{marginLeft: "5px", marginRight: "5px", marginBottom: "20px"}}
        >
            {props.word}
        </button>
    )
}

function SynonymsBlock(props) {

    const buttons = props.synonyms.map(
        word => {
            return <SynonymButton word={word}/>
        }
    )

    return (
        <div style={{marginBottom: "20px"}}>
            {buttons}
        </div>
    )
}

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
            {<SynonymsBlock synonyms={props.synonyms}/>}
            {<AntonymsBlock antonyms={props.antonyms}/>}
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
            const active = entry.id === dta.results[0].id
            return <ListElement
                active={active}
                word={entry.word}
                id={"list-home-list-" + entry.id}
                aria={entry.word}
                key={entry.id}
            />
        }
    )

    const allBrowsers = dta.results.map(
        entry => {
            const active = entry.id === dta.results[0].id
            return <Browser
                active={active}
                key={entry.id}
                vocabularyCard={
                        <VocabularyCard
                            definition={entry.definition}
                            word={entry.word}
                            examples={entry.examples}
                            synonyms={entry.synonyms}
                            antonyms={entry.antonyms}
                        />
                }
                id={entry.word}
                labeledby={"list-home-list-" + entry.id}
            />
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