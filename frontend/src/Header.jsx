import { useState } from 'react'

function Header({setPage}) {
return (

<div className="card text-center">
  <div className="card-body">
    <a onClick={() => setPage("")} className="btn btn-primary">Home</a>
    <a onClick={() => setPage("job")} className="btn btn-primary">Job Applications</a>
    <a onClick={() => setPage("loan")} className="btn btn-primary">Loan and Grants</a>
  </div>
</div>
    
)
}

export default Header;