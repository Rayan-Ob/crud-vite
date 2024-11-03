import axios from 'axios';
import  { useEffect, useState } from 'react'
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';

interface dataobj{
    name? : string | null  ,
    price ?: string  | number,
    image_url ?: string 
}
let detail : dataobj ={
    name : null,
    price :0,
    image_url: ""
}
const token= (localStorage.getItem("user-token"))

function ProductsDetails() {
    const params = useParams();
    const [data, setdata] = useState(detail)

    useEffect(()=>{
        // let g =localStorage.getItem("user-token")

        axios.get(`http://vica.website/api/items/${params.id}`,{
            headers : {
                Authorization: `Bearer ${token}`

                
            }
        })
        .then(res => setdata(res.data))
        .catch((error)=>console.log(error))

    },[])

  return (
    <div>
        <h2>ProductsDetails</h2>
        <div>
            <h3>Product name : <span>{data?.name}</span></h3>
            <h3>Price : <span>{data?.price}</span></h3>
            <div >image : <img src  ={data?.image_url} style={{width : "300px"}}></img></div>
            {/* <img src="" alt="" /> */}

            <Link to ="/">Back to Products</Link>
        </div>

    </div>
  )
}

export default ProductsDetails