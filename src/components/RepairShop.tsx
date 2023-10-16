import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { RepairShopType } from "../data/types";

type RepairShopParams = {
    shop: RepairShopType;
    linksEnabled: boolean;
};

export const RepairShop = (params: RepairShopParams) => {
    const { name, website, whatsapp } = params.shop;

    return <div className="col-md-4 mb-3">
    <div className="card h-100">
        <div className="card-header p-4 text-center"><a href={website} target="_blank" rel="noreferrer"><h4 className="text-uppercase m-0">{name}</h4></a>
        </div>
        <div className="card-body text-center">
            
        </div>
        <div className="card-footer text-center p-3">
            {params.linksEnabled && <a href={whatsapp} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>}
            {!params.linksEnabled && <a href="#captcha"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></a>}
        </div>
    </div>
</div>;
};