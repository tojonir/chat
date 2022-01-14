import './App.css';
import { useEffect, useState } from 'react'
import Home from "./view/home"
import Login from "./view/login"

function App() {
  const [islogin,setIsLogin] = useState(false)

  return (
    <div className="App">
      {
        islogin ? <Home logout={()=>setIsLogin(false)} />:<Login login={()=>setIsLogin(true)} />
      }
    </div>
  );
}

export default App
