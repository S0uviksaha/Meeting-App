import React, {useState} from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom"

function Home() {
  let navigate= useNavigate()
  let [input,setInput] = useState("")
  function handleNavigation(){
    navigate("/room/"+input)
  }
  return (
    <div className="home">
      <input type="text" placeholder="Enter Room Id" value={input} onChange={(e)=>{
        setInput(e.target.value)
        
      }}/>
      <button onClick={handleNavigation}>Join</button>
    </div>
  )
}

export default Home
