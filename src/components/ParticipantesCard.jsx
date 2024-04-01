import * as React from "react";
import participantes from "../images/participantes.png";

const ParticipantesCard = ({group}) => { 
  let size = 0;
  try {
    group.participantes.forEach(element => size = size + 1);
  } catch (error) {
    size = 0;
  }
  
  return (
    <div className="participantes-card">
      <div className="participantes-title">PARTICIPANTES</div>
      <div className="participantes-info">
        <div className="participantes-count">{ size} / 25</div>
        <img
          loading="lazy"
          src={participantes}
          className="participantes-image"
          alt="Participantes"
        />
      </div>
    </div>
  );
};

export default ParticipantesCard;