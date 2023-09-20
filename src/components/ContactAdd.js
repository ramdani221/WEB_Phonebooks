import { useState } from "react"
import { Link } from "react-router-dom"


export default function ContactAdd() {

    const [newContatc, setNewContatc] = useState({name: '', phone: ''})
    const submit = () => {

    }

    return (
        <form onSubmit={submit}>
            <input type="text" id="name" name="name" onChange={(e) => setNewContatc({...newContatc, name: e.target.value})}/>
            <input type="text" id="phone" name="phone" onChange={(e) => setNewContatc({...newContatc, phone: e.target.value})}/>
            <button type="submit">save</button>
            <Link to="/">cancel</Link>
        </form>
    )
}