import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    
<div className='gpt3__header section__padding' id='home'>
  <div className='gpt3__header-content'>
    <h1 className='gradient__text'>
      Join Trevor and build something amaizimg with React Js.
    </h1>

<p>
Welcome to my online portfolio made using Reactjs. It is 
my first Reactjs project and so far it seems worth while.
Journey with me as we find out how much more we can do with
it. learning new skills is always the goal.

</p>

  <div className='gpt3__header-content__input'>

<input type="email" placeholder='Your Email Address' />

<button type='button'>Get started</button>

  </div>

<div className='gpt3__header-content__people'>

  <img src={people} alt='people'/>
  <p>
  1,600 people requested a visit access in the last 24 hours
  </p>
</div>

  </div>


  <div className='gpt3__header-image'>
  <img src={ai} alt='ai'/>
</div>


</div>


  )
};

export default Header;
