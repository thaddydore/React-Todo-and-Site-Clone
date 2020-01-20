import React, {Component} from 'react';
import TopBar from './TopBar';
import './Assignment.css';
import SubHeader from './SubHeader';
import Afterfooter from './Afterfooter';
import Footer from './Footer';

class Assignment extends Component{
  render(){
    return(
      <div>
        <TopBar />
        <SubHeader />
        <Afterfooter />
        <Footer /> 
      </div>
    );
  }
}
export default Assignment;