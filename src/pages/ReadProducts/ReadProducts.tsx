import axios from "axios"
import { useEffect, useState } from "react"
import "./ReadProduct.css"

import { useNavigate } from "react-router"
let token = localStorage.getItem("user-token")
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReadProducts() {
  interface productObj {
    id?: string | number,
    image_url?: string,
    name?: string,
    price?: string | number

  }
  let ArrProducts: Array<productObj> = []
  const [products, setproducts] = useState(ArrProducts)
  const [doneDel, setdoneDel] = useState(false)
  const navigate = useNavigate()
  function goToCreate() {
    navigate("/create")
  }

  useEffect(() => {
    axios.get("http://vica.website/api/items", {
      headers: {
        // Authorization : `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
        Authorization: `Bearer ${token}`

      }
    }).then(res => setproducts(res.data))
      .catch(error => console.log(error))

  }, [doneDel])

  const showEditMessage = () => {
    toast.success(' Edited', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",


    });
  };

  const showDelMessage = () => {
    toast.warn(' Deleted', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",


    });
  };


  const show = (id: string | undefined | number) => {
    navigate(`/details/${id}`)

  }

  const edit = (id: string | undefined | number) => {
    navigate(`/product/edit/${id}`)

  }
  const del = (id: string | undefined | number) => {
    axios.delete(`http://vica.website/api/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`

      }
    })
      .then(res => {
        console.log(res);
        setdoneDel(!doneDel)

      })
      .catch((error) => console.log(error))

  }
  return (
    <div className='read-products color-change'>
      <div className="top">
        <h2>All Products </h2>
        <button onClick={() => goToCreate()} id="create-btn"><i className="fa-solid fa-circle-plus" ></i>Create Products</button>
      </div>

      {(products) ?


        <div className="body-products">
          {
            products.map((e, i) => {
              return (
                <div key={i} className='box-product'>
                  <div><img src={e.image_url} alt="" onClick={() => show(e.id)} /></div>
                  <p id="name"> {e.name}</p>
                  <p id="price">${e.price}</p>

                  <div className="buttons">
                    <button onClick={() => {edit(e.id);showEditMessage()}} id="edit">edit</button>
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
                    <button onClick={() => {del(e.id);showDelMessage()}}><i className="fa-solid fa-trash-can"></i></button>
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
                </div>
              )

            })
          }
        </div>

        : "There are no products ..."

      }
    </div >
  )
}

export default ReadProducts