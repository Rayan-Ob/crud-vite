import axios from "axios"
import { useEffect, useState } from "react"
import "./ReadProduct.css"

import { useNavigate } from "react-router"
let token = localStorage.getItem("user-token")

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

  const show = (id: any) => {
    navigate(`/details/${id}`)

  }

  const edit = (id: any) => {
    navigate(`/product/edit/${id}`)

  }
  const del = (id: any) => {
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
                  {/* <td>{e.id}</td> */}
                  <div><img src={e.image_url} alt="" onClick={() => show(e.id)} /></div>
                  <p id="name"> {e.name}</p>
                  <p id="price">${e.price}</p>

                  <div className="buttons">
                    <button onClick={() => edit(e.id)} id="edit">edit</button>
                    <button onClick={() => del(e.id)}><i className="fa-solid fa-trash-can"></i></button></div>
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