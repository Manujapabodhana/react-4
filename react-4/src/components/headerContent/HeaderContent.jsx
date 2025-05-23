import React from 'react';
import './HeaderContent.css';
import Logoimage from '../../assets/react.svg'

function HeaderContent() {
  return (
    <div className="navcontent">
      <img src="/vite.svg" alt="Logo" />
      <img src={Logoimage} alt="cc" />
    </div>
  );
}

export default HeaderContent;
