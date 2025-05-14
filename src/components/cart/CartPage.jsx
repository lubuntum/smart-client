import "../../styles/cart.css"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { Breadcrumbs } from "../Breadcrumbs"
import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"
import { CartItemsGrid } from "./CartItemsGrid"
import { useBasket } from "../../services/basket/BasketProvider"

export const CartPage = () => {
    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = useState([{ label: "Главная", path: "/" }])
    const {basket, removeItem} = useBasket()
    useEffect(() => {
        setBreadcrumbItems([{ label: "Главная", path: "/" }])
    }, [location.pathname])

    useEffect(() => {
        if (location.state) {
            setBreadcrumbItems(prev => [
                { label: "Главная", path: "/" },
                { label: location.state, path: "" }
            ])
        }
    }, [location.state])

    return (
        <>
            <HeaderComponent/>
            <div className="contentWrapper">
                <Breadcrumbs items={breadcrumbItems}/>
                <CartItemsGrid basket = {basket}/>
            </div>
            <FooterComponent/>
        </>
    )
}