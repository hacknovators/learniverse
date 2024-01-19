import { useState } from 'react'
import Logo from './assets/logo.svg';

function Header({setPage}) {
return (

<div className="card text-center " style={{ width: "18rem" }}>
  <img src={Logo} />
  <div role="group"className="card-body btn-group-vertical "aria-label="Vertical button group">
    <button onClick={() => setPage("") && setVideo([])} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Home</button>
    <button onClick={() => setPage("job")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Job Applications</button>
    <button onClick={() => setPage("loan")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Loan and Grants</button>
    <button onClick={() => setPage("scholarship")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Scholarship</button>
  </div>
</div>
    
)
}

export default Header;