import * as React from "react";
import participantes from "../images/participantes.png";

const ParticipantesCard = ({group}) => {
  return (
    <div className="participantes-card">
      <div className="participantes-title">PARTICIPANTES</div>
      <div className="participantes-info">
        <div className="participantes-count">{group.participantes.length} / 25</div>
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