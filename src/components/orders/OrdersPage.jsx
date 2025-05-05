import "../../styles/orders.css"
import { useEffect, useState } from "react"
import {STATUSES} from "../../statuses"
import { getOrdersRequest } from "../../services/api/orderApi"
import { useAuth } from "../../services/auth/AuthProvider"
import { HeaderComponent } from "../header/HeaderComponent"
import { OrdersList } from "./OrdersList"
import { FooterComponent } from "../footer/FooterComponent"
export const OrdersPage = () => {
    const [status, setStatus] = useState(STATUSES.IDLE)
    const [orders, setOrders] = useState(null)
    const {getToken} = useAuth()
    useEffect(()=> {
        const getOrders = async () => {
            try {
                const response = await getOrdersRequest(getToken())
                setOrders(response.data)
            } catch(err) {
                setStatus(STATUSES.ERROR)
            }
        }
        getOrders()
    }, [])
    return (<>
        <HeaderComponent/>
        <div className="contentWrapper">
            {status === STATUSES.ERROR && <p style={{color: "red"}}>Возникла ошибка</p>}
            <OrdersList orders = {orders}/>
        </div>
        <FooterComponent/>
    </>)
}