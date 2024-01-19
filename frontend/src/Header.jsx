import { useState } from 'react'

function Header({setJobPage, setLoanPage}) {
return (

<div className="card text-center">
  <div className="card-body">
    <a onClick={() => setJobPage(false) || setLoanPage(false)} className="btn btn-primary">Home</a>
    <a onClick={() => setJobPage(true)} className="btn btn-primary">Job Applications</a>
    <a onClick={() => setLoanPage(true)} className="btn btn-primary">Loan and Grants</a>
  </div>
</div>
    
)
}

export default Header;