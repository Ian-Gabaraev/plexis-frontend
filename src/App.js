import './App.css';
import React from "react";
import PrimaryHeader from "./components/Navbar";
import WordOfTheDay from "./components/Word";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

const backendUrl = "http://127.0.0.1:8000/api/wod"

function App() {
    const [dta={word: "Word", definition: "def"}, setDta] = React.useState()

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
          <WordOfTheDay word={word} definition={definition}/>
        </div>
    );
}

export default App;
