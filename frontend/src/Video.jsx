import { useEffect } from 'react';

export default function Video({id, setVideo, setPage}) {
    function goBack() {
        setVideo("")
        setPage("")
    }
    
    useEffect(() => {
        document.getElementById("video-src").src = "http://localhost:8000/svideo/" + id
    }, [])

    return <>
        <video width="320" height="240" controls>
            <source id="video-src" type="video/ogg" />
        </video>

        <a onClick={goBack} className="btn btn-primary">  Go Back  </a>
    </>
}