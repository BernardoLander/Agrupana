import React from "react";
import contactImg from "../images/contactanos.png";


const ContactanosCard = ({group}) => {
    return (
      <div className="contactanos-card">
        <div className="contactanos-title">CONTÁCTANOS</div>
        <h2 className="group-contacto">{group.contacto}</h2>
        <img
          loading="lazy"
          src={contactImg}
          className="contactanos-image"
          alt="Contáctanos"
        />
      </div>
    );
  };

export default ContactanosCard;