import {useState, useEffect} from 'react';
import VideoCard from './VideoCard.jsx';

export default function MainPage({setVideo, setPage}) {
    let [list, setList] = useState([])

    useEffect(() => {
        fetch("/api/video", {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {   
                setList(data)
            })
    }, [])

    return <>
        {(list || []).map((data) => <VideoCard key={data.id} id={data.id} name={data.name} desc={data.desc} setVideo={setVideo} setPage={setPage} /> )}
    </>
}