import axios from "axios"
import { LOGIN, REGISTER, SERVER_URL } from "./urls"

export const loginRequest = async (authData) => {
    return await axios.post(`${SERVER_URL}${LOGIN}`, authData)
}
export const registerRequest = async (accountData) => {
    return await axios.post(`${SERVER_URL}${REGISTER}`, accountData)
}