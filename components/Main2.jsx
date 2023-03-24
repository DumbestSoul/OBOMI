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


export default function Main2(){
    return (
        <div className="main2 displayNone">
            <div className="upper">
                <h1 className="bmi">21.1</h1>
            </div>
            <div className="lower">
                <TextResult maintext="Result : " resulttext="Obese" />
                <TextResult maintext="Recommendation : " resulttext="Lose some weight" />
            </div>
        </div>
    );
}