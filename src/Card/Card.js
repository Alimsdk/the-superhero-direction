import React from 'react';
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
//   console.log(props);
    const {img,name,age,youtube,subscribers,monthlyIncome}=props.youtuber;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Channel Topic: {youtube}</h3>
            <h4>Subscribers: {subscribers}</h4>
            <h2>Monthly Income : {monthlyIncome}</h2>
            <button onClick={()=>props.handleClick(props)}> <FontAwesomeIcon icon={faHandHoldingUsd} /> Get Incomes</button>
        </div>
    );
};

export default Card;