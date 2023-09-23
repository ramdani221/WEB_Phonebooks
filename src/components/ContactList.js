import { useDispatch, useSelector } from "react-redux";
import ContactData from "./ContactData"
import { useEffect } from "react";
import { loadContact } from "../actions/contacts";

export default function ContactList(filter) {

    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContact(filter))
    }, [dispatch, filter])

    const contactsNode = contacts.map((item, index) => (<ContactData contact={item} key={index} />));
    return (
        <div className="contact-list">
            {contactsNode}
        </div>
    )
}