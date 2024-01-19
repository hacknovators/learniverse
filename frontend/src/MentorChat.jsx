import { useState, useEffect } from 'react';

export default function MentorChat({self, setPage}) {
    let [content, setContent] = useState([])

    function sendMessage() {
        const msg = document.getElementById("inlineFormInputName").value
        fetch('/api/chat?' + new URLSearchParams({
            msg: msg,
            mentor: self
        }), {
            method: "POST",
        })
            .then((response) => response.json())
            .then((json) => setContent(content.concat([{id: json.id, mentor: self, msg: msg}])))
    }

    useEffect(() => {
        fetch("/api/chat")
            .then((response) => response.json())
            .then((json) => setContent(json))
    }, [])

    return <>
        <a onClick={() => setPage("")} className="btn btn-primary">{self ? "Logout" : "Go Back"}</a>
        <div className="card" style={{width: "18rem" , marginTop :'1rem' }}>
        { (content || []).map((msg) =>
		<div className={`d-flex justify-content-${msg.mentor ? "begin" : "end"} mb-4`}>
			<div style={{
                marginTop: "auto",
		        marginBottom: "auto",
		        marginRight: "10px",
		        borderRadius: "25px",
		        backgroundColor: msg.mentor ? "#10bfff" : "#78e08f",
		        padding: "10px",
		        position: "relative"}}>
				{msg.msg}
		    </div>
		</div> )}   
            <div className="form-row align-items-center" style = {{ display : 'inline' , paddingTop :'0.3rem' }}>
                <div className="col-sm-3 my-1">
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder="Type message here ..." />
                </div>
                <div className="col-auto my-1">
                    <button onClick={sendMessage} type="submit" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
        
    </>
}