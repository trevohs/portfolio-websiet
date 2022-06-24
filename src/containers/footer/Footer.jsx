import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo' />
          <p> All Rights Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Links</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contacts</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p> 
          <p>Contacts</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>11445 00400 Tom Mboya</p>
          <p>254 790 683 060</p>
          <p>njoroge494@gmail.com</p>
          
        </div>
      </div>
<div className='gpt3__footer-copyright'>
  <p>
    Copyrights @ Trev 2022 | All Rights Reserved
  </p>
</div>

    </div>
  )
}

export default footer;
