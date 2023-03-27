import './index.css';
import Main1 from "./components/Main1";
import Main2 from './components/Main2';
import { useState } from 'react';
import {disappear, calculateBmi, giveRecommendation, resultPrediction} from './function/helpers';

export default function App(){

    const [bmi, setBmi] = useState(0);
    const [res, setRes] = useState("None");
    const [rec, setRec] = useState("None");

    function handleClick(){
        const vals = document.querySelectorAll('.inps')
        let param = [];
        vals.forEach(element => {
            param.push(+element.value);
        });
        if(isNaN(param[0]) || isNaN(param[1]) || isNaN(param[2]))
            window.alert("Please insert all values correctly!")
        else{
            const _bmi = calculateBmi(param[0], param[2]*0.01);
            setBmi(_bmi);
            setRes(resultPrediction(_bmi, param[1]));
            setRec(giveRecommendation(_bmi, param[1]));
            disappear();
        }    
    }

    return (
        <div className="mainBody">
            <Main1 handleClick={handleClick}/>
            <Main2 bmi={bmi} res={res} rec={rec} />
        </div>
    )
}