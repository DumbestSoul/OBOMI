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

export default function Main1(){
    return (
        <div className="main1">
            <div className="input-grid">
                <LabelInput label="Weight" intext="KGs"/>
                <LabelInput label="Age" intext="Years" />
                <LabelInput label="Height" intext="cms" />
            </div>
            <hr />
            <div className="output-panel">
                <button>Calculate BMI</button>
            </div>
        </div>
    )
}