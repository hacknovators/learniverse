import { useState, useEffect } from 'react'
import './App.css'
import MainPage from './MainPage.jsx';
import Header from './Header.jsx';
import Object from './Object.jsx';
import Video from './Video.jsx'

function App() {
  let [video, setVideo] = useState("")
  let [page, setPage] = useState("")
  
  let content;

  // useEffect(() => {
    if (page == "video")
      content = <Video id={video} />
    else
      content = <>
        <Object /> 
        <MainPage setVideo={setVideo} setPage={setPage} />
      </>

    
    // console.log(content)
  // }, [page, video])

  return (
    <>
      <Header />
      {content}
      
    </>
  )
}

export default App
