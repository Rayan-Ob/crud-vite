import  { useEffect, useState } from 'react'
import "./CreateForm.css"
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

interface sendDataObj {
    name?: string,
    price?: string | number,
    image?: string ,
    _method?: string,
    image_url?: string ,
    img?: string

}

function CreateForm({ type }: { type?: string }) {

    const navigate = useNavigate()
    const [data, setdata] = useState<sendDataObj>({})
    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const [img, setimg] = useState('')
    const params = useParams()

    useEffect(() => {
        axios.get(`http://vica.website/api/items/${params.id}`, {
            headers: {

                // Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
                Authorization: `Bearer ${localStorage.getItem("user-token")}`
            }

        }).then(res => {
            setdata(res.data);
            setname(res.data.name)
            setprice(res.data.price)
            setimg(res.data. image_url)
            console.log(res.data)
        }
        )
            .catch(error => console.log(error))

    }, [])

    function send(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()


        console.log(name)
        console.log(price)
        console.log(img)

        let sendData: sendDataObj =
        
    ( type)?{

            name: name,
            price: price,
            image_url: img,
            _method :"PUT"

        } : {
            name: name,
            price: price,
            image_url: img}

      

        axios.post((type) ? `http://vica.website/api/items/${params.id}` : "http://vica.website/api/items", sendData
            ,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("user-token")}`,
                    "Content-Type": "multipart/form-data"
                }
            })

            // .then(res => {
            //     console.log(res.data)


            // })


            navigate("/")


    }

    return (
        <div>
            <form className='create-form' onSubmit={(event: React.FormEvent<HTMLFormElement>) => send(event)}>
                <div className='left'>
                    <div>
                        <label htmlFor="name">Product Name</label>
                        <input type="text" id='name' placeholder='Enter Product Name'
                            onChange={(event) => setname(event.target.value)}
                            defaultValue={data?.name} />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="text" id="price" placeholder='Enter Product Price'
                            onChange={(event: any) => setprice(event.target.value)}
                            defaultValue={data?.price} />
                    </div>
                    <div>
                        <input type='submit' value='Create' id='btn-add'></input>
                    </div>
                </div>
                <div className='right'>
                    <label htmlFor="img"> 
                         <img src={(type)? (data?. image_url) : "/assets/icons/upload.svg"}/>
                         <p>Upload Product Image</p>
                    </label>
                    <input type="file" id="img" style={{ display: "none" }}

                        onChange={(event: any) => setimg(event.target.files[0])}
                    />

                </div>
            </form>
        </div>
    )
}

export default CreateForm