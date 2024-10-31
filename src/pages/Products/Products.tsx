import { Outlet } from "react-router"
import "./Products.css"


function Products() {
    return (
      <div className='products '>
  
          <Outlet/>
      </div>
    )
  }

export default Products