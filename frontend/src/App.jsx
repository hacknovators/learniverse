import { useState, useEffect } from 'react'
import './App.css'
import MainPage from './MainPage.jsx';
import Header from './Header.jsx';
// import Object from './Object.jsx';
import Video from './Video.jsx';
import InfoPage from './InfoPage.jsx';

function App() {
  let [video, setVideo] = useState("")
  let [videoPage, setVideoPage] = useState(false)
  let [jobPage, setJobPage] = useState(false)
  let [loanPage, setLoanPage] = useState(false)
  
  let content;

  // useEffect(() => {
    if (videoPage)
      content = <Video id={video} setVideo={setVideo} setVideoPage={setVideoPage} />
    else if (jobPage)
      content = <InfoPage setPage={setJobPage} work="job" />
    else if (loanPage)
      content = <InfoPage setPage={setLoanPage} work="loan" />
    else
      content = <MainPage setVideo={setVideo} setPage={setVideoPage} />
    
    // console.log(page, content)
  // }, [])

  return (
    <>
      <Header setJobPage={setJobPage} setLoanPage={setLoanPage}/>
      {content}
      
    </>
  )
}

export default App
