import React from "react";
import '../styles/main2.css';

function TextResult(props){
    return (
        <div className="textresult">
            <div className="mtext">{props.maintext}</div>
            <div className="restext">{props.resulttext}</div>
        </div>
    )
}


export default function Main2(props){
    return (
        <div className="main2 displayNone">
            <div className="upper">
                <h1 className="bmi">{props.bmi}</h1>
            </div>
            <div className="lower">
                <TextResult maintext="Result : " resulttext={props.res} />
                <TextResult maintext="Recommendation : " resulttext={props.rec} />
            </div>
        </div>
    );
}