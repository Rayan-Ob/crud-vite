import axios from "axios";
import { useNavigate } from "react-router";
import"./Logout.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logout() {
    // function confirmlog(){
    //     <div>
    //         <p>Are you want logout?</p>
    //         <button onClick={logout}>yes</button>
    //         <button >No</button>
    //     </div>
    // }

    const notify = () => toast("This is a toast notification !");



    const navigate = useNavigate();
  const logout=()=> {
        
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
    const showToastMessage = () => {
        toast.success(' Logout', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",


            });      };
 

  
    
  


  return (
    <div>
    <button onClick={ ()=>{logout();showToastMessage()}  } className="logout">logout</button>
    <ToastContainer
position="top-center"
autoClose={10000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </div>
)
}

export default Logout