import React, { useState } from 'react'

import '../App.css';

export default function Content() {



const [Newvar,Setvar]=useState(0);

    
function lowfun(){
  if (Newvar<=0) {
  return 0;
    
  } else {
    Setvar(Newvar-1)
    
  }
  
}
function fun(){

    Setvar(Newvar+1);
     } 
    
  return (
    <div className='cont' >
      
        <h1>Subscribers:{Newvar}</h1> <br />
        <button onClick={fun} className='button1'>Subcribe</button>
        <button onClick={lowfun} className='button2'>Unsubcribe</button>
        
       
    </div>
  )
}
