import './index.css';
import Main1 from "./components/Main1";
import Main2 from './components/Main2';
import { useState } from 'react';


function disappear(){
    const m1 = document.querySelector('.main1')
    const m2 = document.querySelector('.main2')
    m1.classList.add('hidden')
    m2.classList.remove('displayNone'), m2.classList.add('visible')
}

export default function App(){

    const [bmi, setBmi] = useState(0);
    const [res, setRes] = useState("None");
    const [rec, setRec] = useState("None");

    return (
        <div className="mainBody">
            <Main1 handleClick={disappear}/>
            <Main2 bmi={bmi} res={res} rec={rec} />
        </div>
    )
}