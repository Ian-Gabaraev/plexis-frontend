import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrimaryHeader from "./components/Navbar";
import WordOfTheDay from "./components/WordOfDay";
import PreviousWords from "./components/PreviousWords";
import Lobby from "./components/Lobby";
import useWebsocket from "react-use-websocket";


function App() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={
                    <div className="App">
                        <PrimaryHeader/>
                        <WordOfTheDay/>
                        <br/>
                        <PreviousWords/>
                    </div>
                }>
                </Route>

                <Route path="/lobby" element={
                    <Lobby/>
                }>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
