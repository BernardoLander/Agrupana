import * as React from "react";
import logo from "../images/Logo.jpg";
import insta from "../images/footer-insta.svg";
import facebook from "../images/footer-Facebook.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <img
          loading="lazy"
          src={logo}
          className="footer-image"
          alt="Footer background"
        />
        <div className="footer-divider" />
        <div className="footer-links">
          <div className="footer-links-container">
            <div className="footer-legal-links">
              <h3 className="footer-legal-title">Legal</h3>
              <div className="footer-legal-policies">Políticas</div>
            </div>
            <div className="footer-interest-links">
              <h3 className="footer-interest-title">Enlaces de Interés</h3>
              <div className="footer-interest-links-container">
                <div className="footer-interest-link">Enlace 1</div>
                <div className="footer-interest-link">Enlace 2</div>
                <div className="footer-interest-link">Enlace 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <h3 className="footer-contact-title">Contáctanos</h3>
          <div className="footer-contact-phone">0212- 2856945</div>
          <div className="footer-contact-email">agrupana@unimet.edu.ve</div>
          <div className="footer-contact-icons">
            <img
              loading="lazy"
              src={insta}
              className="footer-contact-icon"
              alt="Contact icon 1"
            />
            <img
              loading="lazy"
              src={facebook}
              className="footer-contact-icon"
              alt="Contact icon 2"
            />
          </div>
        </div>
        <h3 className="footer-discover-title">Descubrir</h3>
        <div className="footer-discover-links">
          <div className="footer-discover-link">
            Agrupaciones Estudiantiles
          </div>
          <div className="footer-discover-link">Enlace 2</div>
        </div>
        <div className="footer-copyright">
          © 2024 Todos los derechos reservados - Agrupana.
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f6f6f6;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 23px;
        }

        .footer-image {
          width: 25%;
          height: 15%;
          border-radius: 50%;
          object-fit: contain;
          object-position: center;
          overflow: hidden;
          z-index: 10;
          margin-top: 110px;
          font-size: 32px;
          color: #000;
          font-weight: 700;
          padding: 26px 8px 49px;
        }

        @media (max-width: 991px) {
          .footer-image {
            margin-top: 40px;
          }
        }

        .footer-divider {
          border: 2px solid rgba(0, 0, 0, 1);
          background-color: #000;
          margin-top: -62px;
          width: 1202px;
          max-width: 100%;
          height: 2px;
        }

        .footer-links {
          align-self: flex-end;
          z-index: 10;
          display: flex;
          margin-right: 118px;
          width: 468px;
          max-width: 100%;
          flex-direction: column;
          color: #000;
        }

        @media (max-width: 991px) {
          .footer-links {
            margin-right: 10px;
          }
        }

        .footer-links-container {
          display: flex;
          margin-top: 58px;
          gap: 20px;
          justify-content: space-between;
          padding: 0 1px;
        }

        @media (max-width: 991px) {
          .footer-links-container {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .footer-legal-links {
          align-self: flex-start;
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }

        @media (max-width: 991px) {
          .footer-legal-links {
            white-space: initial;
          }
        }

        .footer-legal-title {
          font: 500 20px Roboto Condensed, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: 0;
        }

        .footer-legal-policies {
          margin-top: 21px;
          font: 400 16px Roboto, sans-serif;
        }

        .footer-interest-links {
          display: flex;
          flex-direction: column;
        }

        .footer-interest-title {
          font: 500 20px Roboto Condensed, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: 0;
        }

        .footer-interest-links-container {
          display: flex;
          margin-top: 25px;
          flex-direction: column;
          align-items: flex-start;
          font-size: 16px;
          font-weight: 400;
          padding: 0 1px 0 80px;
        }

        @media (max-width: 991px) {
          .footer-interest-links-container {
            padding-left: 20px;
          }
        }

        .footer-interest-link {
          font-family: Roboto, sans-serif;
          margin-top: 18px;
        }

        @media (max-width: 991px) {
          .footer-interest-link {
            margin-left: 5px;
          }
        }

        .footer-contact {
          align-self: flex-start;
          z-index: 10;
          display: flex;
          width: 180px;
          max-width: 100%;
          flex-direction: column;
          margin: -112px 0 0 120px;
        }

        @media (max-width: 991px) {
          .footer-contact {
            margin-left: 10px;
          }
        }

        .footer-contact-title {
          color: #000;
          font: 500 20px Roboto Condensed, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: 0;
        }

        .footer-contact-phone {
          color: #000;
          margin-top: 25px;
          font: 400 16px Roboto, sans-serif;
        }

        .footer-contact-email {
          color: #000;
          margin-top: 18px;
          font: 400 16px Roboto, sans-serif;
        }

        .footer-contact-icons {
          display: flex;
          margin-top: 15px;
          gap: 12px;
        }

        @media (max-width: 991px) {
          .footer-contact-icons {
            padding-right: 20px;
          }
        }

        .footer-contact-icon {
          width: 24px;
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
        }

        .footer-discover-title {
          color: #000;
          margin: -125px 0 0;
          font: 500 20px Roboto Condensed, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .footer-discover-links {
          display: flex;
          margin-top: 25px;
          flex-direction: column;
          font-size: 16px;
          color: #000;
          font-weight: 400;
          padding: 0 20px;
        }

        .footer-discover-link {
          font-family: Roboto, sans-serif;
          margin-top: 15px;
        }

        .footer-copyright {
          color: #bdbdbd;
          margin-top: 58px;
          font: 400 16px Roboto, sans-serif;
        }

        @media (max-width: 991px) {
          .footer-copyright {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;