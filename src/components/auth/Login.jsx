import { useState } from "react"
import { useAuth } from "../../services/auth/AuthProvider"
import {STATUSES} from "../../statuses"
import { loginRequest } from "../../services/api/authApi"
import "../../styles/auth.css"
export const Login = () => {
    const {login} = useAuth()

    const [authData, setAuthData] = useState()
    const [status, setStatus] = useState(STATUSES.IDLE)
    const authDataHandler = (e) => {
        const {name, value} = e.target
        setAuthData(prev => ({...prev, [name]: value}))
    }
    const loginHandler = async () => {
        try {
            if (!authData.password || !authData.email) {
                setStatus(STATUSES.ERROR)
                return
            }
            const response = await loginRequest(authData)
            login(response.data)
        } catch(err) {
            setStatus(STATUSES.ERROR)
        }
    }
    return (<>
        <div className="pageWrapper">
            <div className="contentWrapper">
                <div className="loginWrapper">
                    <p>Вход в аккаунт сотрудника</p>
                    <input type="text" placeholder="Почта" name = "email" onChange={authDataHandler} />
                    <input type="password" placeholder="Пароль" name="password" onChange={authDataHandler} />
                    <button className="loginButton" onClick={loginHandler}>Войти</button>
                </div>
                
            </div>
            
        </div>
    </>)
}