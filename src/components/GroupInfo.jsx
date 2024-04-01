import React from "react";
import ParticipantesCard from "./ParticipantesCard";
import ContactanosCard from "./ContactanosCard";
import RankingCard from "./RankingCard";



function GroupInfo( {group}) {
    return (
      <>
        <div className="container">
          <div className="card-container">
            <div className="column">
              <ParticipantesCard group={group}/>
            </div>
            <div className="column">
              <ContactanosCard group={group}/>
            </div>
            <div className="column">
              <RankingCard group={group}/>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .container {
            padding: 0 20px;
          }
  
          .card-container {
            display: flex;
            gap: 20px;
          }
  
          @media (max-width: 991px) {
            .card-container {
              flex-direction: column;
              align-items: stretch;
              gap: 0;
            }
          }
  
          .column {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 33%;
            margin-left: 0;
          }
  
          @media (max-width: 991px) {
            .column {
              width: 100%;
            }
          }
  
          .participantes-card {
            background-color: rgba(255, 130, 0, 0.66);
            display: flex;
            width: 100%;
            flex-grow: 1;
            flex-direction: column;
            font-size: 32px;
            color: #fff;
            font-weight: 700;
            margin: 0 auto;
            padding: 42px 0 0 80px;
          }
  
          .participantes-title {
            font-family: Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
            align-self: start;
            margin-left: 12px;
          }
  
          @media (max-width: 991px) {
            .participantes-title {
              margin-left: 10px;
            }
          }
  
          .participantes-info {
            align-self: end;
            display: flex;
            margin-top: 45px;
            align-items: flex-start;
            gap: 20px;
            justify-content: space-between;
          }
  
          @media (max-width: 991px) {
            .participantes-info {
              margin-top: 40px;
            }
          }
  
          .participantes-count {
            font-family: Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
            align-self: start;
          }
  
          .participantes-image {
            aspect-ratio: 1.33;
            object-fit: auto;
            object-position: center;
            width: 146px;
            align-self: end;
            margin-top: 23px;
            max-width: 100%;
          }
  
          .contactanos-card {
            border: 1px solid rgba(255, 130, 0, 0.66);
            background-color: #fff;
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            font-size: 32px;
            color: rgba(255, 130, 0, 0.66);
            font-weight: 700;
            white-space: nowrap;
            width: 100%;
            padding: 36px 0 0 80px;
          }
  
          @media (max-width: 991px) {
            .contactanos-card {
              white-space: initial;
            }
          }
  
          .contactanos-title {
            font-family: Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
            align-self: start;
            margin-left: 12px;
          }
  
          @media (max-width: 991px) {
            .contactanos-title {
              margin-left: 10px;
            }
          }
  
          .contactanos-image {
            aspect-ratio: 1.27;
            object-fit: auto;
            object-position: center;
            width: 145px;
            align-self: end;
            z-index: 10;
            margin-top: 68px;
            max-width: 100%;
          }
  
          @media (max-width: 991px) {
            .contactanos-image {
              margin-top: 40px;
            }
          }
  
          .ranking-card {
            background-color: rgba(255, 130, 0, 0.66);
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: center;
            font-size: 32px;
            color: #fff;
            font-weight: 700;
            white-space: nowrap;
            width: 100%;
            padding: 42px 80px 79px;
          }
  
          @media (max-width: 991px) {
            .ranking-card {
              white-space: initial;
              padding: 0 20px;
            }
          }
  
          .ranking-title {
            font-family: Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
          }
  
          .ranking-image {
            aspect-ratio: 3.7;
            object-fit: auto;
            object-position: center;
            width: 236px;
            margin-top: 36px;
          }
        `}</style>
      </>
    );
  }
  
  export default GroupInfo;