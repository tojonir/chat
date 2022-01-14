import { useState } from "react"
import "./login.css"

function Login(props) {
    const [user,setUser] = useState()
    const [password,setPassword] = useState()

    const login = ()=>{
        props.login()
    }
    return(
        <div className="login-container">
            <input value={user} onChange={(e)=>setUser(e.target.value)} className="login-input login-input-text"></input>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="login-input login-input-pass"></input>
            <button onClick={()=>login()} className="login-input">Login</button>
        </div>
    )
}

export default Login