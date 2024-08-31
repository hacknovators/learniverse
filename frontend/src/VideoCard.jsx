import { useEffect } from 'react'
import Desc from './Desc.jsx';

export default function VideoCard({id, name, desc, setVideo, setPage}) {
    function gotoVideo() {
        setVideo([id, desc])
        setPage("video")
    }

    const host = import.meta.env.VITE_APP_HOST || "";
    
    useEffect(() => {
        const cards = document.getElementsByName("thumb-" + id)
        cards[0].src = `${host}/thumbnail/${id}`

        console.log(document.getElementsByClassName("card-img-top")[0].src)
    }, [])
    
    return <>
    <div className="card" style={{ width: "18rem" }}>
        <img name={`thumb-${id}`} className="card-img-top" src="" alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{name.toUpperCase()}</h5>
            {/* <p className="card-text">{desc}</p> */}
            <Desc desc={desc.length > 200 ? desc.slice(0, 200) + '...' : desc} />
            <a onClick={gotoVideo} className="btn btn-primary">Watch video</a>
        </div>
    </div>
    </>
}