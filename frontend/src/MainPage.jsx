import {useState, useEffect} from 'react';
import VideoCard from './VideoCard.jsx';

export default function MainPage({setVideo, setPage}) {
    let [list, setList] = useState([])
    let [std, setStd] = useState(0)
    let [sub, setSub] = useState("")

    const host = import.meta.env.VITE_APP_HOST || "";

    useEffect(() => {
        fetch(`${host}/video?` + new URLSearchParams({
            sub: sub,
            std: std,
        }), {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                setList(data)
            })
    }, [sub, std])

    function setStdOptions(e) {
        const { _, value } = e.target;
        setStd(value)
    }

    function setSubOptions(e) {
        const { _, value } = e.target;
        setSub(value)
    }

    return <>
        <fieldset id="inlineRadioOptions1" className="card" style={{width: "18rem" }}>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="8" onChange={setStdOptions} />
            <label className="form-check-label" for="inlineRadio1">Class 8</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="9" onChange={setStdOptions} />
            <label className="form-check-label" for="inlineRadio2">Class 9</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="10" onChange={setStdOptions} />
            <label className="form-check-label" for="inlineRadio3">Class 10</label>
          </div>
        </fieldset>
        
        <fieldset id="inlineRadioOptions2" className="card" style={{width: "18rem" }} onChange={setSubOptions}>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="science" />
            <label className="form-check-label" for="inlineRadio1">Science</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="maths"/>
            <label className="form-check-label" for="inlineRadio2">Mathematics</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="english" />
            <label className="form-check-label" for="inlineRadio3">English</label>
          </div>
        </fieldset>
        {(list || []).map((data) => <VideoCard key={data.id} id={data.id} name={data.name} desc={data.desc} setVideo={setVideo} setPage={setPage} /> )}
    </>
}