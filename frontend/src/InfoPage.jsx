import { useState, useEffect } from 'react';
import InfoCard from './InfoCard.jsx';

export default function InfoPage({setPage ,work}) {
    let [data, setData] = useState([])

    const host = import.meta.env.VITE_APP_HOST || "";

    useEffect(() => {
        fetch(`${host}/${work}`)
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [""])
    
    return <>
        <a onClick={() => setPage("")} className="btn btn-primary"> Go Back </a>
        {data.map((d) => <InfoCard name={d.name} desc={d.desc} url={d.url} />)}
        <a onClick={() => setPage("")} className="btn btn-primary"> Go Back </a>
    </>
}