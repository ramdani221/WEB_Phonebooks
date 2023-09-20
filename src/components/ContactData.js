import { faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ContactData({ contact }) {
    return (
        <div>
            <div>
                <button className="btn-avatar"><img src="http://localhost:3000/images/user-tie-solid.svg" alt="avatar"/></button>
            </div>
            <div>
                <input type="text" name="name" value={contact.name} readOnly />
                <input type="text" name="phone" value={contact.phone} readOnly />
                <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button><FontAwesomeIcon icon={faTrashCan} /></button>
                <button><FontAwesomeIcon icon={faFloppyDisk} /></button>
            </div>
        </div>
    )
}