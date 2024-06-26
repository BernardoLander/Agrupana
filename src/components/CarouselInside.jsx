import React from "react";



function CarouselInside({title, description, pic}) {
    return (
    <>
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="mission-title">{title}</h2>
            <div className="mission-description">

              <p>{description}
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={pic}
            className="mission-image"
          />
        </div>
      </section>
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
          
          .mission-image {
            aspect-ratio: 1.35;
            width: 100%;
            object-fit: cover;
          }
        `}</style>
    </>
    
    ); 
  }
  
  export default CarouselInside;
  
  