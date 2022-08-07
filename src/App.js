import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WordOfTheDay from "./components/WordOfDay";
import Lobby from "./components/Lobby";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import MultipleChoice from "./components/MultipleChoice";
import VocabularyList from "./components/VocabularyList";
import StudyMenu from "./components/StudyMenu";
import Thesaurus from "./components/Thesaurus";


function App() {

    return (
        <div className="App">
            <div className="container py-4">
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="signin" element={<SignInForm/>}/>
                        <Route path="lobby" element={<Lobby/>}/>
                        <Route path="practice" element={<MultipleChoice/>}/>
                        <Route path="vocabulary" element={<VocabularyList/>}/>
                        <Route path="study" element={<StudyMenu/>}/>
                        <Route path="home" element={<WordOfTheDay/>}/>
                        <Route path="thesaurus" element={<Thesaurus/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}


export default App;
