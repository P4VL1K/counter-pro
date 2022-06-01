import React from 'react';
import './App.css';
import {RightCounter} from "./RightCounter";
import {LeftCounter} from "./LeftCounter";

function App() {
    return (
        <div className="main">
           <LeftCounter/>
           <RightCounter/>
        </div>
    );
}

export default App;
