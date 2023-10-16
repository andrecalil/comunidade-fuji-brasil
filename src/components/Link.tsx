import React from "react";
import { LinkType } from "../data/types";

type LinkParams = {
    link: LinkType;
    index: number;
};

export const Link = (params: LinkParams) => {
    const { title, url, image } = params.link;

    const textToRight = params.index % 2 === 0;

    return <div className="row gx-0 justify-content-center">
        <div className="col-lg-6"><img className="img-fluid" src={image} alt="..." /></div>
        <div className={`col-lg-6 ${textToRight ? "": "order-lg-first"}`}>
            <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                        <a href={url} target='_blank' rel="noreferrer"><h4 className="text-white">{title}</h4></a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};