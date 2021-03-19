import React from 'react';
import './Nav.css';



export default function Nav() {
 
  return (  

    <nav className='navbar'>

      <ul className='submit'>
        <button type="submit" name="download" id="buttonDwl">My Cards</button>
      </ul>
      <ul className="features">
        <li> SETTINGS </li>
        <li> LOGIN </li>
        <li> LOGOUT </li>
      </ul>
    
    
    </nav>

  );

}

