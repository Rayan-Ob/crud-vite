import  { useEffect, useState } from 'react'
import "./SearchBtn.css"
import axios from 'axios'
let token = localStorage.getItem("user-token")

interface nameData{
    name?:any

    // i?:number
}
let m =Array<nameData>
let x : any=[]



function SearchBtn({ resaults }: { resaults?: any }) {

   const [input, setinput] = useState('')

//    const [results, setresults] = useState([])

   const fetchData=(value :any)=>{
    axios.get("http://vica.website/api/items", {
        headers: {
          // Authorization : `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
          Authorization: `Bearer ${token}`
  
        }
      })
      .then(res=>res.data)
      .then( (res)=> {
        const result = res.filter((user :any)=>{
            return value && user && user.name && user.name.toLowerCase( ).includes(value)
        });
        resaults(result)
        console.log(result)
      })
    //     .catch(error => console.log(error))


   }
   const handleChange=(value: any)=>{
    setinput(value)
    fetchData(value)
   }


    return (
        <div className='search-bar'>
         
                <input type="search" placeholder="type to search" 
                onChange={(e :React.ChangeEvent<HTMLInputElement>)=>handleChange(e.target.value)} />
            <div><i className="fa-solid fa-magnifying-glass"></i></div>

 

  


         </div>
    )
}

export default SearchBtn