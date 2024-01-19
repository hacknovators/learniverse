import { useState, useEffect } from 'react'
import './App.css'
import MainPage from './MainPage.jsx';
import Header from './Header.jsx';
import Video from './Video.jsx';
import InfoPage from './InfoPage.jsx';

function App() {
  let [video, setVideo] = useState("")
  let [page, setPage] = useState("")
  
  let content;

  // useEffect(() => {
    if (page == "video")
      content = <Video id={video} setVideo={setVideo} setPage={setPage} />
    else if (page == "job")
      content = <InfoPage setPage={setPage} work="job" />
    else if (page == "loan")
      content = <InfoPage setPage={setPage} work="loan" />
    else
      content = <MainPage setVideo={setVideo} setPage={setPage} />
    
    // console.log(page, content)
  // }, [])

  return (
    <>
      <Header setPage={setPage} />
      {content}
      
    </>
  )
}

export default App
