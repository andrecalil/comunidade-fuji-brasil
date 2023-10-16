import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { StoreType } from "../data/types";

type StoreParams = {
    store: StoreType;
    linksEnabled: boolean;
};

export const Store = (params: StoreParams) => {
    const { name, website, state, whatsapp, fullCountry, officialRepresentant, sells, rents } = params.store;
    const operation = `${sells ? "Venda" : ""}${sells && rents ? ", " : ""}${rents ? "Aluguel" : ""}`;

    return <div className="col-md-4 mb-3">
    <div className="card h-100">
        <div className="card-header p-4 text-center"><a href={website} target="_blank" rel="noreferrer"><h4 className="text-uppercase m-0">{name}</h4></a>
        </div>
        <div className="card-body text-center">
            {officialRepresentant &&
            <>
                <div className="small text-black-50">Representante oficial Fujifilm</div>
                <hr className="mx-auto"></hr>
            </>}
            <div className="small text-black-50">{operation}</div>
            <hr className="mx-auto"></hr>
            <div className="small text-black-50">{state}{fullCountry && ", atuação nacional"}</div>
            <div className="small text-black-50"></div>
        </div>
        <div className="card-footer text-center p-3">
            {params.linksEnabled && <a href={whatsapp} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>}
            {!params.linksEnabled && <a href="#captcha"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></a>}
        </div>
    </div>
</div>;
};