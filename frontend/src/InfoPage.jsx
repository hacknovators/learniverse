import { useState, useEffect } from 'react';
import InfoCard from './InfoCard.jsx';
import JobPage from './JobPage.jsx';
import Scholarship from './Scholarship.jsx';

export default function InfoPage({setPage ,work}) {
    let [data, setData] = useState([])

    useEffect(() => {
        fetch('/api/' + work )
            .then((response) => response.json())
            .then((json) => setData(json))

        console.log(data)
    }, [""])
    
    return <>
        <a onClick={() => setPage(false)} className="btn btn-primary"> Go Back </a>
        {data.map((d) => <InfoCard name={d.name} desc={d.desc} url={d.url} />)}

    </>
}