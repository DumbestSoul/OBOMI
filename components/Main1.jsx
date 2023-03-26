import React from 'react';
import '../styles/main1.css';


function LabelInput(props){
    return (
        <div className="label-input">
            <h1>{props.label} : </h1>
            <input placeholder={props.intext} className = "inps" />
        </div>
    )
}


export default function Main1(props){
    return (
        <div className="main1">
            <div className="input-grid">
                <div className="inputr1">
                    <LabelInput label="Weight" intext="KGs" id="wt" />
                    <LabelInput label="Age" intext="Years" id="age" />
                </div>
                <div className="inputr2">
                    <LabelInput label="Height" intext="cms" id="ht" />
                </div>
            </div>
            <hr />
            <div className="output-panel">
                <button onClick={props.handleClick}>Calculate BMI</button>
            </div>
        </div>
    )
}