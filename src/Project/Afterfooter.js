import React from 'react';
import afterfooter from './afterfooter.png';

const Afterfooter = () =>{
  return(
    <div className='afterfooterdiv'>
      <a href='#' className='afterfooter'>LOAD MORE</a>
      <div>
        <img src={afterfooter} className='test'/>
        <p className='afterfooterp'>&copy; 2019 CBS Interactive. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Afterfooter;