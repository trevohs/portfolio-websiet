import React from 'react';
import './features.css';
import {Feature} from '../../components';

const featuresData = [
  
   { title:'Improving end distrusts instantly' ,
    text:'Welcome to my first Reactjs project'
  },

  {
    title:'Improving end distrusts instantly' ,
    text:'Welcome to my first Reactjs project'
  },

  {
    title:'Improving end distrusts instantly' ,
    text:'Welcome to my first Reactjs project'
  },
  
  {
    title:'Improving end distrusts instantly' ,
    text:'Welcome to my first Reactjs project'
  }
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
<h1 className='gradient__text'>The future is now and you just need to realise it. 
Step into the future today and make it happen.</h1>

<p>Request early access to get started</p>
      </div>


      <div className='gpt3__features-container'>

{featuresData.map((item, index) => (
  <Feature title={item.title} text={item.text} key={item.title + index} />
))};
      </div>

    </div>
  )
};

export default Features;
