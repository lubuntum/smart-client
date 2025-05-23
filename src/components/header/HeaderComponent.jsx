import "../../styles/header.css"
import "../../styles/popup.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { ROUTES } from '../../routes'

import { ReactComponent as MenuIcon } from "../../res/icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as CartIcon } from "../../res/icons/shopping_cart_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as SearchIcon } from "../../res/icons/search_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as TuneIcon } from "../../res/icons/tune_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as CloseIcon } from "../../res/icons/close_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { useBasket } from "../../services/basket/BasketProvider"
import { useAuth } from "../../services/auth/AuthProvider"

import logoImage from "../../res/images/Logo.png"

export const HeaderComponent = () => {
    const navigate = useNavigate()
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const {basket} = useBasket()
    const {checkAuth, logout} = useAuth()
    console.log(basket)
    const togllePopup = () => {
        setIsPopupVisible(!isPopupVisible)
    }
    
    return (
        <>
            <div className="headerWrapper">
                <div className="headerContent">
                    <div className="logoContent" onClick={() => {navigate(ROUTES.HOME)}}>
                        <div className="logoImg">
                            <img src={logoImage} alt=""></img>
                        </div>
                        <div className="logoName">
                            <h3>Smart</h3>
                            <p>Магазин смартфонов и <br/> аксессуаров</p>
                        </div>
                    </div>

                    <div className="headerNav">
                        <a onClick={() => {navigate(ROUTES.HOME)}}>Главная</a>
                        <a onClick={() => {navigate(ROUTES.NEWS, {state: "Новости"})}}>Новости</a>
                        <a onClick={() => {navigate(ROUTES.PROMOTIONS, {state: "Акции"})}}>Акции</a>
                    </div>

                    <div className="headerPhone">
                        <p>+7 (800) 555-35-35</p>
                        <button className="transparent">Заказать звонок</button>
                    </div>
                </div>
            </div>
    
            <div className="fixedHeaderWrapper">
                <div className="fixedHeaderContent">
                    <button className="default" onClick={togllePopup}><MenuIcon className="svgIcon"/>Каталог</button>

                    <div className="fixedHeaderSearchBar">
                        <input placeholder="Поиск по каталогу" required></input>
                        <div className="sreachBarOptions">
                            <button className="link"><SearchIcon className="svgIcon"/></button>
                            <button className="link"><TuneIcon className="svgIcon"/></button>
                        </div>
                    </div>

                    <div className="fixedHeaderOptions" onClick={() => {navigate(ROUTES.CART, {state: "Корзина"})}}>
                        <button className="link"><CartIcon className="svgIcon"/></button>
                        <div className="fixedHeaderCartQuantity">{basket ? basket.length : 0}</div>
                    </div>
                    {checkAuth() && <button onClick={() => navigate(ROUTES.ORDERS_LIST)}>Заказы</button>}
                    {checkAuth() && <button onClick={logout}>Выйти</button>}
                </div>
            </div>

            <div className={`popupOverlay ${isPopupVisible ? "show" : ""}`} onClick={togllePopup}>
                <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                    <button className="link" onClick={() => {
                        navigate(ROUTES.PRODUCTS, {state: "Планшеты"});
                        togllePopup()}}>
                    <div className="popupLinkSymbol">+</div>Планшеты</button>

                    <button className="link" onClick={() => {
                        navigate(ROUTES.PRODUCTS, {state: "Смартфоны"});
                        togllePopup()}}>
                    <div className="popupLinkSymbol">+</div>Смартфоны</button>

                    <button className="link" onClick={() => {
                        navigate(ROUTES.PRODUCTS, {state: "Наушники"});
                        togllePopup()}}>
                    <div className="popupLinkSymbol">+</div>Наушники</button>

                    <button className="link" onClick={() => {
                        navigate(ROUTES.PRODUCTS, {state: "Смарт-часы"});
                        togllePopup()}}>
                    <div className="popupLinkSymbol">+</div>Смарт-часы</button>

                    <button className="link" onClick={() => {
                        navigate(ROUTES.PRODUCTS, {state: "Аксессуары"});
                        togllePopup()}}>
                    <div className="popupLinkSymbol">+</div>Аксессуары</button>
                </div>
                
                <button className="link closePopup" onClick={togllePopup}><CloseIcon className="svgIcon"/></button>
            </div>
        </>
    )
}