import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeButton({children, className, link }) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
      <style jsx>{`
        .button {
          justify-content: center;
          border-radius: 56px;
          border-color: #fff;
          background-color: #ffad57;
          align-self: center;
          color: #fff;
          text-transform: uppercase;
          padding: 14px 17px;
          font: 20px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
        }
      `}
      </style>
    </button>
  );
}

export default HomeButton;
