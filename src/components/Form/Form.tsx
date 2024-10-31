import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

interface obj {
    label?: string,
    type?: string,
    placeholder?: string,
    name: string,
}

interface formProps {
    title?: string,
    desc?: string,
    inputs: Array<obj>,
    btn?: string,
    end?: string,
    url?: string | any,
    link?: string,
    linkText?: string
}

function Form({ title, desc, inputs, btn, end, url, link, linkText }: formProps) {
    const navigate = useNavigate()

    let keys = {}
    useEffect(() => {
        for (let i = 0; i < inputs?.length; i++) {
            keys = { ...keys, [inputs[i].name]: null }
        }
        setdata(keys)
    }, []);

    const [data, setdata] = useState(keys)
    const handleData = (name: string, value: string | number | null | any) => {
        setdata({ ...data, [name]: value })
        console.log(data)
    }

    const send = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(data)

        axios.post(url, data)
            .then(res => {
                console.log(res)
                let x: any = res.data
                localStorage.setItem("user", JSON.stringify(res.data))
                localStorage.setItem("user-token", (x.token))
                navigate("/")
            }
            )
            .catch(error => console.log(error))
    }


    return (
        <div>

            <form className='form' onSubmit={(event: React.FormEvent<HTMLFormElement>) => send(event)}>
                <div className="form-title">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="form-body">
                    <div className={(inputs.length > 2 ? "row" : "col")}>

                        {
                            inputs.map((element, index: any) => {
                                return (
                                    <div key={index} className="box">

                                        <label htmlFor={index}>{element.label}</label>
                                        {(element.type == "file" ? <label htmlFor={index}> <img src='/assets/profile-avatar.png' /> </label> : null)}

                                        <input
                                            onChange={(event: any) => {
                                                handleData(element.name, (element.type == "file") ? event.target.files[0] : event.target.value)
                                            }}
                                            type={element?.type}
                                            placeholder={element?.placeholder}
                                            id={index}
                                            style={{ display: (element.type == "file" ? "none" : "block") }}>

                                        </input>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <input type='submit' value={btn}></input>

                        <div id="end">
                            <p id="end-parag">{end} </p>
                            <Link to={`${link}`} id="link"> {linkText}</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form