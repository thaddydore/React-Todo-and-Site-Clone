import React from 'react';
import Arrow from './Arrow.png';
import TopBarOne from './TopBarOne.png'
import {FaChevronLeft} from 'react-icons/fa'


const TopBar = () =>{
  return(
    <div className='TopBar'>
      <div className='anchor'>
        <FaChevronLeft/>
      </div>
      <img src={Arrow} className='image'/>
      <img src={TopBarOne} className='image'/>
      <a href="#" className="anchor"><strong>TECHREPUBLIC</strong> <small>HOME</small></a>
    </div>
      
  );
}
export default TopBar;