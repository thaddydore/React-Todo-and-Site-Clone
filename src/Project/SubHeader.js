import React, { Component } from 'react';
import {FaSistrix} from 'react-icons/fa';
import techpremium from './techpremium.png';


class SubHeader extends Component {
  render() {
    return(
      <div className='bbd'>
        <div className='left'>
          <img src={techpremium} className='imagesub'/>
        </div>
        <div className='mid'>
          <ul className='ul'>
            <li>IT POLICIES</li>
            <li>CEO</li>
            <li>SECURITY</li>
            <li>BIG DATA</li>
            <li>CLOUD</li>
          </ul>
          <p>
            <input type='text'  placeholder='Search our premium  library' className='inputOne'/>
            <FaSistrix className='srchlogo'/>
          </p>
        </div>
        <div className='right'>
          <div>
            <p>
              <a href=''>SUBSCRIBE</a> <span>/LOG IN</   span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default SubHeader;
