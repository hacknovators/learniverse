export default function MentorLogin({setPage}) {
    function login() {
        const user = document.getElementById("inlineFormInputGroupUsername2").value
        const pass = document.getElementById("inputPassword5").value
        if (user === "mentor" && pass === "1234")
            setPage("mentor-chat")
        else
            setPage("")
    }

    return <div className="card" style={{ marginTop :'1rem' }}>
            <h4>User Login</h4>
            <label className="sr-only" for="inlineFormInputGroupUsername2" style={{textAlign : 'initial' }}>Username</label>
            <div className="input-group mb-2 mr-sm-2">
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
            </div>
            <label for="inputPassword5" style={{textAlign : 'initial' }}>Password</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Password"/>
            <button onClick={login} type="submit" className="btn btn-primary" style = {{ marginTop :'0.6rem' }}>Login</button>
        </div>
}