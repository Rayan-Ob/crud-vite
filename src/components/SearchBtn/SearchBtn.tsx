import  { useEffect, useState } from 'react'
import "./SearchBtn.css"
import axios from 'axios'
let token = localStorage.getItem("user-token")


function SearchBtn() {

    const [data, setdata] = useState([])
    const [activeSearch, setactiveSearch] = useState([data])


    useEffect(() => {

        axios.get("http://vica.website/api/items", {

            headers: {
                // Authorization : `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
                Authorization: `Bearer ${token}`

            }
        }).then(res => {setdata(res.data)
            console.log(data)
        })
            .catch(error => console.log(error))

    }, [])
    // let word : any

    function handleData(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value == '') {
            setactiveSearch([])
            return false
        }
        setactiveSearch(data.filter((word :any) => word.includes(e.target.value)).slice(0, 8))

    }
    return (
        <form className='search-bar'>
            <div className="relative">
                <input type="search" placeholder="type to search" onChange={(e) => handleData(e)} />
                <button className='absolute'><i className="fa-solid fa-magnifying-glass"></i></button>

                {activeSearch.length > 0 && (
                    <div className='search-list'>
                        11111
                        {
                            activeSearch.map(e=>(
                                <span>{e}</span>
                            ))
                        }

                    </div>

                )}

            </div>

        </form>
    )
}

export default SearchBtn