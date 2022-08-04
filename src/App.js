import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrimaryHeader from "./components/Navbar";
import WordOfTheDay from "./components/WordOfDay";
import PreviousWords from "./components/PreviousWords";
import Lobby from "./components/Lobby";
import useWebsocket from "react-use-websocket";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import MultipleChoice from "./components/MultipleChoice";
import VocabularyList from "./components/VocabularyList";
import StudyMenu from "./components/StudyMenu";


function App() {

    return (
        <div className="App">
            <div className="container py-4">
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="signin" element={<SignInForm />}/>
                        <Route path="lobby" element={<Lobby />}/>
                        <Route path="practice" element={<MultipleChoice/>}/>
                        <Route path="vocabulary" element={<VocabularyList/>}/>
                        <Route path="study" element={<StudyMenu/>}/>
                        <Route path="home" element={<WordOfTheDay/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}


export default App;
