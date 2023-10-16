import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

type Camera = {
    name: string;
    year: number;
};

const cameras : Camera[] = [
    { name: 'X-E1', year: 2012 },
    { name: 'X-E2', year: 2013 },
    { name: 'X-E3', year: 2017 },
    { name: 'X-E4', year: 2021 },
    { name: 'X-H1', year: 2018 },
    { name: 'X-H2', year: 2022 },
    { name: 'X-H2S', year: 2022 },
    { name: 'X-Pro1', year: 2012 },
    { name: 'X-Pro2', year: 2016 },
    { name: 'X-Pro3', year: 2019 },
    { name: 'X-S10', year: 2020 },
    { name: 'X-S20', year: 2023 },
    { name: 'X-T1', year: 2014 },
    { name: 'X-T2', year: 2016 },
    { name: 'X-T3', year: 2018 },
    { name: 'X-T4', year: 2019 },
    { name: 'X-T5', year: 2022 },
    { name: 'X-T10', year: 2015 },
    { name: 'X-T20', year: 2017 },
    { name: 'X-T30', year: 2019 },
    { name: 'X-T30 II', year: 2021 },
    { name: 'X100', year: 2011 },
    { name: 'X100F', year: 2017 },
    { name: 'X100S', year: 2013 },
    { name: 'X100T', year: 2014 },
    { name: 'X100V', year: 2020 },
];

const years = [
    '-',
    2011,
    2012,
    2013, 
    2014, 
    2015, 
    2016, 
    2017, 
    2018, 
    2019
];

const firstQuarter = ['1', '5', 'A', 'S', 'E', 'J', 'N']
const secondQuarter = ['2', '6', 'B', 'T', 'F', 'K', 'P']
const thirdQuarter = ['3', '7', 'C', 'U', 'G', 'L', 'Q']
const fourthQuarter = ['4', '8', 'D', 'W', 'H', 'M', 'R']

export const ManufacturingDate = ({enabled}) => {
    const [camera, setCamera] = useState<string>();
    const [firstDigit, setFirstDigit] = useState<string>('');
    const [secondDigit, setSecondDigit] = useState<string>('');
    const [manufacturing, setManufacturing] = useState<string>();

    const valid = (str) => str && str !== undefined && str !== null && str !== '' && str !== '-';

    useEffect(() => {
        const proceed = valid(camera) && valid(firstDigit) && valid(secondDigit);

        if(!proceed) {
            setManufacturing(`-`);
            return;
        }

        let year = years[firstDigit];
        const quarter = firstQuarter.includes(secondDigit) ? 1 : secondQuarter.includes(secondDigit) ? 2 : thirdQuarter.includes(secondDigit) ? 3 : fourthQuarter.includes(secondDigit) ? 4 : 0;
        const cameraYear = cameras.find(c => c.name === camera)?.year ?? 2010;

        if(cameraYear > year) {
            year += 10;
        }

        if(year > new Date().getFullYear()) {
            setManufacturing(`Informações inválidas`);
            return;
        }

        setManufacturing(`${quarter}o trimestre de ${year}`);
    }, [camera, firstDigit, secondDigit]);   

    return <div className="row gx-0 justify-content-center mt-3 mb-3">
        <div className="col-lg-3"></div>
        {!enabled && <div className="col-lg-6 text-center"><p>Habilite os links acima</p></div>}
        {enabled && <>
        <div className="col-lg-3 p-3">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3" controlId="formCamera">
                    <Form.Label>Câmera</Form.Label>
                    <Form.Select aria-label="Câmera" onChange={(e) => setCamera(e.target.value)}>
                        <option value='-'>Câmera</option>
                        { cameras.map((c, ix) => {
                            return <option key={ix} value={c.name}>{c.name}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstDigit">
                    <Form.Label>1o dígito do número de série</Form.Label>
                    <Form.Select aria-label="1o dígito SN" onChange={(e) => setFirstDigit(e.target.value)}>
                        { years.map((y, ix) => {
                            return <option key={ix} value={ix === 0? '-' : ix}>{ix === 0? '1o dígito SN' : ix}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSecondDigit">
                    <Form.Label>2o dígito do número de série</Form.Label>
                    <Form.Select aria-label="2o dígito SN" onChange={(e) => setSecondDigit(e.target.value)}>
                        <option value='-'>2o dígito SN</option>
                        { [...firstQuarter, ...secondQuarter, ...thirdQuarter, ...fourthQuarter].sort().map((q, ix) => {
                            return <option key={ix} value={q}>{q}</option>
                        })}
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
        <div className="col-lg-3 text-center m-auto">
            <p className="mb-0">Câmera</p>
            <h3 className="mb-2">{camera ?? '-'}</h3>
            <p className="mb-0">Fabricação</p>
            <h3>{manufacturing ?? '-'}</h3>
        </div>
        </>}
        <div className="col-lg-3"></div>
    </div>;
};