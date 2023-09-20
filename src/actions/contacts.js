
import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const loadContactFailed = () => ({
    type: 'LOAD_CONTACT_FAILED'
})

const loadContactSuccess = (contacts) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    contacts
})

export const loadContact = () => dispatch => request.get('phonebooks').then(({ data }) => {
    dispatch(loadContactSuccess(data.phonebooks))
}).catch(() => {
    dispatch(loadContactFailed())
})

const addContactFailed = () => ({
    type: 'ADD_CONTACT_FAILED'
})

const addContactSuccess = (contacts) => ({
    type: 'ADD_CONTACT_SUCCESS',
    contacts
})

export const addContact = () => dispatch => request.post('phonebooks').then(({data}) => {
    dispatch(addContactSuccess(data))
}).catch (() => {
    dispatch(addContactFailed())
})

export const updateContact = () => ({
    type: 'UPDATE_CONTACT'
})

export const deleteContact = () => ({
    type: 'UPDATE_CONTACT'
})

export const updateAvatar = () => ({
    type: 'UPDATE_AVATAR'
})
