import React from 'react';
import '../styles/main1.css';


function LabelInput(props){
    return (
        <div className="label-input">
            <h1>{props.label} : </h1>
            <input placeholder={props.intext} />
        </div>
    )
}


export default function Main1(props){
    return (
        <div className="main1">
            <div className="input-grid">
                <div className="inputr1">
                    <LabelInput label="Weight" intext="KGs"/>
                    <LabelInput label="Age" intext="Years" />
                </div>
                <div className="inputr2">
                    <LabelInput label="Height" intext="cms" />
                </div>
            </div>
            <hr />
            <div className="output-panel">
                <button onClick={props.handleClick}>Calculate BMI</button>
            </div>
        </div>
    )
}