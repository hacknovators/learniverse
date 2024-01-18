import { useState } from 'react'

export default function VideoCard({name, desc}) {
    return <>
    <div className="card" style={{ width: "18rem" }}>
        {/* <img class="card-img-top" src=".../100px180/" alt="Card image cap"> */}
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" class="btn btn-primary">Watch video</a>
        </div>
    </div>
    </>
}