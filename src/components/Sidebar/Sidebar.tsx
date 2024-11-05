import { useNavigate } from 'react-router'
// import axios from 'axios'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Logout from '../Logout/Logout';



interface linksObj {
    to: string,
    title: string,
    icon? : string
}

interface sidebarProps {
    logo1: string,
    logo2:string,
    links: Array<linksObj>

}

function Sidebar({ logo1,logo2, links }: sidebarProps) {
    const navigate = useNavigate();

  
    return (
        <div className='sidebar'>
            <div>
                <h2><span id='log1'>{logo1}</span><span id='log2'>{logo2}</span></h2>
                <div className='links-sidebar'>
                    {links?.map((element, index) => {
                        return (
                            <NavLink key={index}
                                to={element.to}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""

                                }
                            >
                               <i className={element.icon} id='icon-side'></i>{element.title} </NavLink>
                        )

                    })}
                </div>
            </div>
            <Logout/>

        </div>
    )
}

export default Sidebar