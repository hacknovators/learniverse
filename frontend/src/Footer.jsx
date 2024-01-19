import { useState } from 'react'

function Footer({setPage}) {
return (

<div className="card text-center " style={{ width: "18rem" }}>
  <div role="group"className="card-body btn-group-vertical "aria-label="Vertical button group">
    <button onClick={() => setPage("job")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Job Applications</button>
    <button onClick={() => setPage("loan")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Loan and Grants</button>
    <button onClick={() => setPage("scholarship")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Scholarship</button>
    <button onClick={() => setPage("mentor-login")} className="btn btn-outline-primary" style={{marginTop:"1rem"}}>Mentor Login</button>
  </div>
</div>
    
)
}

export default Footer;