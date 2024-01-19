import { useState } from 'react';
import Desc from './Desc.jsx';

export default function InfoCard({name, desc, url}) {
    return <>
        <div className="card" style={{width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{name.toUpperCase()}</h5>
    {/* <h6 class="card-subtitle mb-2 text-body-secondary"></h6> */}
    {/* <p class="card-text"> Name </p> */}
    {/* <p className="card-text"> {desc} </p> */}
    <Desc desc={desc} />
    <a href={url} class="card-link"> Apply Now </a>
    
  </div>
</div>
    </>
}