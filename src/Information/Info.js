import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart.js/Cart';
import "./Info.css"

const Info = () => {
    const [youtubers,setYoutubers]=useState([]);
   const [income,setIncome]=useState([]);

    
   useEffect(()=>{
       fetch('./info.json')
       .then(res=>res.json())
       .then(data=>setYoutubers(data));
   },[]);

   const handleClick=(person)=>{
        const newOne=[...income,person];
        // console.log(newOne);
        setIncome(newOne)
        
}
   
    //    console.log(youtubers);
    return (
        <div className="full-info">
            <div className="display-card">
               
               {
                   youtubers.map(youtuber=> 
                   
                   <Card key={youtuber.id} youtuber={youtuber} handleClick={handleClick}
                   ></Card>)
               }
            </div> 
            <div className='cost'>
              <Cart income={income}></Cart>
            </div>
        </div>
    );
   
};

export default Info;