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

export const HeaderComponent = () => {
    const navigate = useNavigate()
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const togllePopup = () => {
        setIsPopupVisible(!isPopupVisible)
    }
    
    return (
        <>
            <div className="headerWrapper">
                <div className="headerContent">
                    <div className="logoContent" onClick={() => {navigate(ROUTES.HOME)}}>
                        <div className="logoImg">
                            <img src="" alt=""></img>
                        </div>
                        <div className="logoName">
                            <h3>Smart</h3>
                            <p>Магазин смартфонов и <br/> аксессуаров</p>
                        </div>
                    </div>

                    <div className="headerNav">
                        <a onClick={() => {navigate(ROUTES.HOME)}}>Главная</a>
                        <a onClick={() => {navigate(ROUTES.ABOUT)}}>О компании</a>
                        <a onClick={() => {navigate(ROUTES.NEWS)}}>Новости</a>
                        <a onClick={() => {navigate(ROUTES.PROMOTIONS)}}>Акции</a>
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

                    <div className="fixedHeaderOptions">
                        <button className="link" onClick={() => {navigate(ROUTES.CART)}}><CartIcon className="svgIcon"/></button>
                        <div className="fixedHeaderCartQuantity" onClick={() => {navigate(ROUTES.CART)}}>10</div>
                    </div>
                </div>
            </div>

            <div className={`popupOverlay ${isPopupVisible ? "show" : ""}`} onClick={togllePopup}>
                <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                    <button className="link" onClick={() => {navigate(ROUTES.PRODUCTS)}}><div className="popupLinkSymbol">+</div>Планшеты</button>
                    <button className="link" onClick={() => {navigate(ROUTES.PRODUCTS)}}><div className="popupLinkSymbol">+</div>Смартфоны</button>
                    <button className="link" onClick={() => {navigate(ROUTES.PRODUCTS)}}><div className="popupLinkSymbol">+</div>Наушники</button>
                    <button className="link" onClick={() => {navigate(ROUTES.PRODUCTS)}}><div className="popupLinkSymbol">+</div>Смарт-часы</button>
                    <button className="link" onClick={() => {navigate(ROUTES.PRODUCTS)}}><div className="popupLinkSymbol">+</div>Аксессуары</button>
                </div>
                <button className="link closePopup" onClick={togllePopup}><CloseIcon className="svgIcon"/></button>
            </div>
        </>
    )
}