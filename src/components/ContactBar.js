import { faArrowDownAZ, faArrowDownZA, faMagnifyingGlass, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ContactBar({find}) {
    return (
        <div>
            <button><FontAwesomeIcon icon={faArrowDownZA}/></button>
            <button><FontAwesomeIcon icon={faArrowDownAZ}/></button>
            <div>
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" name="keyword" id="keyword" onKeyUp={(e) => find(e.target.value)}/>
            </div>
            <Link to="/add"><FontAwesomeIcon icon={faUserPlus}/></Link>
        </div>
    )
}