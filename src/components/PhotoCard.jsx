import React from "react";


import Button from '../components/Button';

function PhotoCard({ title, description, image, isReversed, hasButton, btnMessage, link , color}) {
  const actualColor = color || "#f6f6f6"; // Use default if color is not provided

  
  return (
    <section className={`feature-section ${isReversed ? "reversed" : ""}`}>
      <div className="image-column">
        <img src={image} alt="" className="feature-image" />
      </div>
      <div className="content-column">
        <div className="feature-content" style={{backgroundColor: {actualColor}}}>
          <h2 className="feature-title" style={{backgroundColor: {actualColor}}}>{title}</h2>
          <p className="feature-description" style={{backgroundColor: {actualColor}}}>{description}</p>
          {hasButton && <Button className={title} link={link}>{btnMessage}</Button>}
        </div>
      </div>
      <style jsx>{`
        .feature-section {
          display: flex;
          gap: 15px;
        }
        
        .feature-section.reversed {
          flex-direction: row-reverse;
        }
        
        .image-column {
          width: 58%;
        }
        
        .content-column {
          width: 42%;
        }
        
        .feature-image {
          aspect-ratio: 1.69;
          object-fit: cover;
          width: 100%;
        }
        
        .feature-content {
          display: flex;
          flex-direction: column;
          color: #000;
          font-weight: 500;
          margin-top: 37px;
        }
        
        .feature-title {
          font: Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 50px;
        }
        
        .feature-description {
          margin-top: 37px;
          font: Roboto, sans-serif;
          font-size: 25px;
        }
        
        @media (max-width: 991px) {
          .feature-section {
            flex-direction: column;
          }
          
          .image-column,
          .content-column {
            width: 100%;
          }
          
          .feature-content {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
export default PhotoCard;