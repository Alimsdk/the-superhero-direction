import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props);
      const {income}=props;
     
       let total=0;
       let photo='';
       let name;
      for(const earning of income){
          const income=parseInt(earning.youtuber.monthlyIncome)
          total=total+income;
          photo=earning.youtuber.img;
          name=earning.youtuber.name;
      }

     
   
    return (
        <div>
             <h2>Youtubers Added:{props.income.length}</h2>
               <h2>Total Income:${total}</h2>
               <br />
             
               <img className="sm-img" src={photo} alt="" />
               <p>{name}</p>
               <button className='withdraw-btn'>Withdraw All Incomes </button>
        </div>
    );
};

export default Cart;