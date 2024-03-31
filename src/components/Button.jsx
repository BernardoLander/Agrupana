import React from 'react';



function Button({ children, className }) {
    return (
      <button className={`button ${className}`}>
        {children}
        <style jsx>{`
          .button {
            justify-content: center;
            border-radius: 56px;
            background-color: #ffad57;
            align-self: center;
            color: #fff;
            text-transform: uppercase;
            padding: 14px 17px;
            font: 20px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
          }
        `}</style>
      </button>
    );
  }
export default Button