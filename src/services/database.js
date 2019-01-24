import axios from 'axios'
const url = 'https://edgewatertest.herokuapp.com/'

export const changeValue = (data) => {
    return axios.post(url + "changeValue", data)
    .then(res => res.data)
    .catch(err => err.response)
}

export const getDBNumber = () => {
    return axios.get(url + "getValue")
    .then(res => res.data[0])
    .catch(err => err.response)
}
