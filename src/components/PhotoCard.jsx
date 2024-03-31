import React from "react";


import Button from '../components/Button';

function PhotoCard({ title, description, image, isReversed , btnMessage, link}) {
  return (
    <section className={`feature-section ${isReversed ? "reversed" : ""}`}>
      <div className="image-column">
        <img src={image} alt="" className="feature-image" />
      </div>
      <div className="content-column">
        <div className="feature-content">
          <h2 className="feature-title">{title}</h2>
          <p className="feature-description">{description}</p>
          <Button className={title} link ={link}>{btnMessage}</Button>
        </div>
      </div>
      <style jsx>{`
        .feature-section {
          display: flex;
          gap: 20px;
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
          font: 700 40px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        .feature-description {
          margin-top: 37px;
          font: 16px Roboto, sans-serif;
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