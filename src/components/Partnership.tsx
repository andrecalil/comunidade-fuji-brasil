import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { PartnershipType } from "../data/types";

type PartnershipParams = {
  partner: PartnershipType;
  linksEnabled: boolean;
};

export const Partnership = (params: PartnershipParams) => {
  const { title, description, image, whatsapp, site, mode } = params.partner;

  const renderFooter = () => {
    if (mode === "w") {
      if (params.linksEnabled)
        return (
          <a href={whatsapp} target="_blank" rel="noreferrer">
            Garanta seu desconto via WhatsApp
          </a>
        );
      else
        return (
          <a href="#captcha">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </a>
        );
    } else if (mode === "c") {
      return <a href="#about">Peça o cupom nos nossos grupos</a>;
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-header p-4 text-center">
          <h4 className="text-uppercase m-0">
            <a href={site} target="_blank" rel="noreferrer">
              <img src={image} alt={title} className="img-fluid" />
            </a>
          </h4>
        </div>
        <div className="card-body text-center">
          <div
            className="small text-black-50"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className="card-footer text-center p-3">{renderFooter()}</div>
      </div>
    </div>
  );
};
