import './index.css';
import Main1 from "./components/Main1";
import Main2 from './components/Main2';
import { useState } from 'react';

//selectors

function disappear(){
    const m1 = document.querySelector('.main1') //main1 container
    const m2 = document.querySelector('.main2') //main2 container
    m1.classList.add('hidden')
    m2.classList.remove('displayNone'), m2.classList.add('visible')
}

function calculateBmi(weight, height){
    return Math.ceil(weight/(height**2));
}


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