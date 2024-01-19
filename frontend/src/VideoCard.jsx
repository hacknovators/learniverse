import { useEffect } from 'react'
import Desc from './Desc.jsx';

export default function VideoCard({id, name, desc, setVideo, setPage}) {
    function gotoVideo() {
        setVideo([id, desc])
        setPage("video")
    }
    
    useEffect(() => {
        // id-1 is technically very unsafe
        document.getElementsByClassName("card-img-top")[id-1].src = "http://localhost:8000/thumbnail/" + id

        console.log(document.getElementsByClassName("card-img-top")[0].src)
    }, [])
    
    return <>
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="" alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{name.toUpperCase()}</h5>
            {/* <p className="card-text">{desc}</p> */}
            <Desc desc={desc.length > 200 ? desc.slice(0, 200) + '...' : desc} />
            <a onClick={gotoVideo} className="btn btn-primary">Watch video</a>
        </div>
    </div>
    </>
}