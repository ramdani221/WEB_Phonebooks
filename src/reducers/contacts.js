const contacts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return action.contacts
        case 'ADD_CONTACT_SUCCES':
            return state;
        case 'UPDATE_CONTACT_SUCCESS':
            const newstate = [...state.filter((contacts) => contacts.id !== action.data.id), action.data];
            newstate.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            return newstate;
        case 'DELETE_CONTACT_SUCCESS':
            return state.filter((contacts) => contacts.id !== action.id);
        case 'UPDATE_AVATAR_SUCCESS':
            return state;
        case 'LOAD_CONTACT_FAILED':
        case 'ADD_CONTACT_FAILED':
        case 'UPDATE_CONTACT_FAILED':
        case 'DELETE_CONTACT_FAILED':
        case 'UPDATE_AVATAR_FAILED':
        default:
            return state;
    }
}

export default contacts