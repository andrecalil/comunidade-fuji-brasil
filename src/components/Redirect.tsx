import React from "react";
import { useParams } from "react-router-dom";

const redirects = {
    'loja': 'https://forms.gle/uYqLM5G5Sj3Yc3fE9',
    'assistencia': 'https://forms.gle/w2Zr9HaoaBAmErQ47',
    'pilha': 'https://forms.gle/uhSnVLzKZYcLc1jC6'
};

export const Redirect = () => {
    const survey = useParams()?.survey ?? '';
    const to = redirects[survey];

    if(!to) window.location.href = '/';
    else window.location.replace(to);

    return <p>Aguarde</p>;
};