import { useEffect, useState } from "react"
import "./Navbar.css"
// import axios from "axios"
// import { Link } from "react-router-dom"


function Navbar() {

  const [theme, settheme] = useState(false)
  const handleClick = () => {
    settheme(!theme)
  }
  useEffect(() => {

    if (theme == true) {
      (document.querySelector('body') as HTMLElement).setAttribute('data-theme', 'dark')
    }
    else {
      (document.querySelector('body') as HTMLElement).setAttribute('data-theme', 'light')
    }

  })
  return (
    <div className="navbar">
      <input type="search" placeholder="type to search" />
      <div onClick={handleClick} id="dark">
        <img id='dark-light' src={theme ? "/assets/icons/sun-w.png" : "/assets/icons/moon-icon-0.png"} alt="moon or sun " />
      </div>


    </div>
  )
}

export default Navbar