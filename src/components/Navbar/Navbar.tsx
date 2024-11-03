import { useEffect, useState } from "react"
import "./Navbar.css"
// import axios from "axios"
import SearchBtn from "../SearchBtn/SearchBtn"
// import axios from "axios"
// import { Link } from "react-router-dom"


function Navbar() {
  // let token = localStorage.getItem("user-token")


  const [theme, settheme] = useState(false)
  // const [dataSearch, setdataSearch] = useState([])
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

      {/* input search */}

      <div>
        <SearchBtn/>
      </div>

      {/* dark and light */}
      <div onClick={handleClick} id="dark">
        <img id='dark-light' src={theme ? "/assets/icons/sun-w.png" : "/assets/icons/moon-icon-0.png"} alt="moon or sun " />
      </div>


    </div>
  )
}

export default Navbar