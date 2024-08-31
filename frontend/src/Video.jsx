import { useEffect } from 'react';
import Desc from './Desc';

export default function Video({id, desc, setVideo, setPage}) {
    function goBack() {
        setVideo([])
        setPage("")
    }

    const host = import.meta.env.VITE_APP_HOST || "";
    
    useEffect(() => {
        document.getElementById("video-src").src = `${host}/svideo/${id}`
    }, [])

    return <>
        <video width="320" height="240" controls>
            <source id="video-src" type="video/ogg" />
        </video>

        <Desc desc={desc} />

        <a onClick={goBack} className="btn btn-primary">  Go Back  </a>
    </>
}