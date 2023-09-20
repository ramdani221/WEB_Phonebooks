const contacts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return action.contacts
        case 'ADD_CONTACT':
            break;
        case 'LOAD_CONTACT_FAILED':
            return state;
        default:
            return state;
    }
}

export default contacts