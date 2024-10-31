import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"


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

    function logout() {
        axios.post("http://vica.website/api/logout", null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user-token")}`
            }
        })
            .then(res => {
                console.log(res)
                navigate("/auth")
            })
    }
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

            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Sidebar