import { useDispatch, useSelector } from "react-redux";
import ContactData from "./ContactData"
import { useEffect } from "react";
import { loadContact } from "../actions/contacts";

export default function ContactList() {

    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContact())
    }, [dispatch])

    const contactsNode = contacts.map((item, index) => (<ContactData contact={item} key={index} />));
    return (
        <div>
            {contactsNode}
        </div>
    )
}