import axios from "axios";
const baseULR = "http://localhost:3001/persons";

const addPerson = (newcontact) => {
    return axios.post(baseULR, newcontact).then((response) => {
        return response.data;
    });
}

const getPersons = () => {
    return axios.get(baseULR).then((response) => {
        return response.data;
    });
}

const updatePerson = (id, newcontact) => {
    return axios.put(`${baseULR}/${id}`, newcontact).then((response) => {
        return response.data;
    })
}

const deletePerson = (id) => {
    return axios.delete(`${baseULR}/${id}`).then((response) => {
        return response.data;
    })
}

export { getPersons, addPerson, updatePerson, deletePerson };