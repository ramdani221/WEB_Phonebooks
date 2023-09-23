import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addContact } from "../actions/contacts"
import { useDispatch } from "react-redux"


export default function ContactAdd() {

    const navigate = useNavigate()
    const [newContatc, setNewContatc] = useState({name: '', phone: ''})
    const dispatch = useDispatch()
    const submit = () => {
        dispatch(addContact(newContatc))
        navigate('/')
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