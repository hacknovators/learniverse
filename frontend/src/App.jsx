import { useState, useEffect } from 'react'
import './App.css'
import MainPage from './MainPage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Video from './Video.jsx';
import InfoPage from './InfoPage.jsx';
import MentorChat from './MentorChat.jsx';
import MentorLogin from './MentorLogin.jsx';

function App() {
  let [video, setVideo] = useState([])
  let [page, setPage] = useState("")
  
  let content;

  // useEffect(() => {
    if (page == "video")
      content = <Video id={video[0]} desc={video[1]} setVideo={setVideo} setPage={setPage} />
    else if (page == "job")
      content = <InfoPage setPage={setPage} work="job" />
    else if (page == "loan")
      content = <InfoPage setPage={setPage} work="loan" />
    else if (page == "scholarship")
      content = <InfoPage setPage={setPage} work="scholarship" /> 
    else if (page == "mentor")
      content = <MentorChat self={false} setPage={setPage} />
    else if (page == "mentor-chat")
      content = <MentorChat self={true} setPage={setPage} />
    else if (page == "mentor-login")
      content = <MentorLogin setPage={setPage} />
    else
      content = <div>
        <MainPage setVideo={setVideo} setPage={setPage} />
        <Footer setPage={setPage} />
      </div>
    
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
