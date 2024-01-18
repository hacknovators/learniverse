import { useEffect } from 'react'

export default function VideoCard({id, name, setVideo, setPage}) {
    function gotoVideo() {
        setVideo(id)
        setPage("video")
    }
    
    useEffect(() => {
        document.getElementsByClassName("card-img-top")[0].src = "http://localhost:8000/thumbnail/" + id
    }, [])
    
    return <>
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="" alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <p className="card-text">{desc}</p> */}
            <a onClick={gotoVideo} className="btn btn-primary">Watch video</a>
        </div>
    </div>
    </>
}