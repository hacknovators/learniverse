import {useState, useEffect} from 'react';
import VideoCard from './VideoCard.jsx';

export default function MainPage() {
    let [list, setList] = useState([])

    useEffect(() => {
        fetch("/api/video", {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setList(data)
            })
    }, [])

    return <>
        {(list || []).map((data) => <VideoCard id={data.id} name={data.name} /> )}
    </>
}