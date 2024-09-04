import axios from "axios"

const apiUrl = 'http://127.0.0.1:8000/api';
// const deviseUrl = 'http://localhost:5021/devise';

export const getTaille = () => {
    return axios.get(`${apiUrl}/taille`);
}

// export const findDevises = () => {
//     return axios.get(`${deviseUrl}`);
// }

// export const transferer = (data: Transfert) => {
//     return axios.post(`${banqueUrl}/comptes/transfert`, data);
// }

// export const findTransfert = (numero: string) => {
//     return axios.get(`${banqueUrl}/comptes/transfert/${numero}`);
// }