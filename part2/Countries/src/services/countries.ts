import axios from 'axios';
const baseURL = "https://studies.cs.helsinki.fi/restcountries/"

const getAllCountries = () => {
    return axios.get(baseURL + "api/all").then((res) => {
        return res.data
    })
}

const getCountry = (countryName:string) => {
    return axios.get(`${baseURL}/api/name/${countryName}`).then((res) => {
        return res.data;
    })
}

export { getAllCountries, getCountry };