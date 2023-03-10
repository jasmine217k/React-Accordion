import React, { useState } from 'react';
import {questions} from './api';
import "./accordion.css";
import Myaccordion from './Myaccordion';

const Accordion=()=>{

    const [data,setData]=useState(questions);
    return(
         <>
            
            <section className="main-div">
            <h1>React Interview Questions</h1>
            {
            data.map((curElem) => {
        
            return <Myaccordion key={curElem.id} {...curElem}/>;
            })
       
            }
            </section>
        </>
    )
}

export default Accordion;