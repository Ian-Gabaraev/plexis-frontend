import './App.css';
import React from "react";
import PrimaryHeader from "./components/Navbar";
import WordOfTheDay from "./components/WordOfDay";
import PreviousWords from "./components/PreviousWords";

const backendUrl = "http://127.0.0.1:8000/api/wod"

function App() {

    const [
        dta={word: "Word", definition: "Definition"},
        setDta
    ] = React.useState()

    React.useEffect(function () {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => setDta(data))
    }, [])

    const word = dta.word
    const definition = dta.definition

    return (
        <div className="App">
          <PrimaryHeader/>
          <WordOfTheDay
              word={word}
              definition={definition}
          />
          <br/>
          <PreviousWords/>
        </div>
    );
}

export default App;
