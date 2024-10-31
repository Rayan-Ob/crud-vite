import { Outlet } from "react-router"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Dashboard.css"


function Dashboard() {
    const links = [
      {
        to: "/",
        title: "Products",
        icon : "fa-solid fa-cubes-stacked"
      },
      {
        to: "/favorites",
        title: "Favorites",
        icon : "fa-solid fa-heart"
      },
      {
        to: "/order",
        title: "Order List",
        icon : "fa-solid fa-bars"
      }
    ]
    return (
      <div className='dashbord'>
  
        <Sidebar logo1="Dash"  logo2 = "Stack" links={links} />

        <div className='items'>
          <Navbar />
          <div className="color-change">
          <Outlet />
          </div>
          
        </div>
  
  
      </div>
    )
  }

export default Dashboard