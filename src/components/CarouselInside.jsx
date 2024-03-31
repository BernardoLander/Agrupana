import React from "react";
import ImageWithBorder from "./components/ImageWithBorder.jsx"
import DotIndicator from "./components/DotIndicator.jsx"



function CarouselInside({title, description, pic}) {
    return (
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="mission-title">{title}</h2>
            <div className="mission-description">
              <ImageWithBorder
                src="../images/leftArrow.svg"
              />
              <p>{description}
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={pic}
            className="mission-image"
          />
          <ImageWithBorder
            src="../images/rightArrow.svg"
          />
        </div>
        <DotIndicator />
      </section>
    );
  }
  
  export default function InsideInit({title, description, pic}) {
    return (
      <>
        <div className="container">
          <div className="content">
            <CarouselInside
            title={title}
            description={description}
            pic={pic} />
          </div>
        </div>
  
        <style jsx>{`
          .container {
            border-radius: 25px;
            display: flex;
            justify-content: center;
          }
          
          .content {
            border-radius: 25px;
            background-color: #fff;
            width: 100%;
            padding: 46px 55px 12px;
          }
          
          @media (max-width: 991px) {
            .content {
              padding: 0 20px;
            }
          }
          
          .mission-section {
            display: flex;
            flex-direction: column;
            gap: 18px;
            color: #000;
          }
          
          .mission-content {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }
          
          @media (max-width: 991px) {
            .mission-content {
              flex-wrap: wrap;
            }
          }
          
          .mission-text {
            display: flex;
            flex-direction: column;
            margin-top: 26px;
          }
          
          .mission-title {
            margin-left: 65px;
            font: 700 40px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
          }
          
          @media (max-width: 991px) {
            .mission-title {
              margin-left: 10px;
            }
          }
          
          .mission-description {
            display: flex;
            margin-top: 53px;
            gap: 20px;
            font-size: 16px;
            font-weight: 400;
            justify-content: space-between;
            font-family: Roboto, sans-serif;
          }
          
          @media (max-width: 991px) {
            .mission-description {
              flex-wrap: wrap;
              margin-top: 40px;
            }
          }
          
          .image-with-border {
            aspect-ratio: 0.52;
            width: 12px;
            stroke-width: 6px;
            stroke: #000;
            border: 6px solid #000;
          }
          
          .mission-image {
            aspect-ratio: 1.35;
            width: 100%;
            object-fit: cover;
          }
          
          .dot-indicator {
            display: flex;
            justify-content: center;
            gap: 16px;
          }
          
          .dot {
            border-radius: 50%;
            width: 16px;
            height: 16px;
            background-color: rgba(0, 0, 0, 0.2);
          }
          
          .dot.active {
            background-color: #000;
          }
        `}</style>
      </>
    );
  }
  
  