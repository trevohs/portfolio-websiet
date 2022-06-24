import React from 'react';
import possibilityImage from '../../assets/possibility.png';

import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
     <div className='gpt3__possibility-image'>
       <img src={possibilityImage} alt='possibility' />
       </div>
       <div className='gpt3__possibility-content'>
         <h4>Request Early Access to Get Stsarted</h4>
         <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
         <p>Welcome to my online portfolio made using Reactjs.
            It is my first Reactjs project and so far it seems worth while.</p>
            <h4>Request Early Access to Get Stsarted</h4>
       </div>
    </div>
  )
}

export default Possibility;
