import { useState } from 'react'

function Header({setJobPage, setLoanPage}) {
return (

<div className="card text-center">
  <div className="card-body">
    <a onClick={setJobPage(true)} className="btn btn-primary">  Job Applications  </a>
    <a onClick={setLoanPage(true)} className="btn btn-primary">  Loan Acess </a>
  </div>
</div>
    
)
}

export default Header;