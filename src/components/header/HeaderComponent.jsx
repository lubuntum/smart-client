import "../../styles/header.css"
import "../../styles/popup.css"

import { ReactComponent as MenuIcon } from "../../res/icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as CartIcon } from "../../res/icons/shopping_cart_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as SearchIcon } from "../../res/icons/search_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as TuneIcon } from "../../res/icons/tune_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as CloseIcon } from "../../res/icons/close_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { useEffect, useState } from "react"
import { useBasket } from "../../services/basket/BasketProvider"

export const HeaderComponent = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const {basket} = useBasket()
    console.log(basket)
    const togllePopup = () => {
        setIsPopupVisible(!isPopupVisible)
    }
    
    return (
        <>
            <div className="headerWrapper">
                <div className="headerContent">
                    <div className="logoContent">
                        <div className="logoImg">
                            <img src="" alt=""></img>
                        </div>
                        <div className="logoName">
                            <h3>Smart</h3>
                            <p>Магазин смартфонов и <br/> аксессуаров</p>
                        </div>
                    </div>

                    <div className="headerNav">
                        <a>Главная</a>
                        <a>О компании</a>
                        <a>Новости</a>
                        <a>Акции</a>
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
                        <button className="link"><CartIcon className="svgIcon"/></button>
                        <div className="fixedHeaderCartQuantity">{basket ? basket.length : 0}</div>
                    </div>
                </div>
            </div>

            <div className={`popupOverlay ${isPopupVisible ? "show" : ""}`} onClick={togllePopup}>
                <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                    <button className="link"><div className="popupLinkSymbol">+</div>Планшеты</button>
                    <button className="link"><div className="popupLinkSymbol">+</div>Смартфоны</button>
                    <button className="link"><div className="popupLinkSymbol">+</div>Наушники</button>
                    <button className="link"><div className="popupLinkSymbol">+</div>Смарт-часы</button>
                    <button className="link"><div className="popupLinkSymbol">+</div>Аксессуары</button>
                </div>
                <button className="link closePopup" onClick={togllePopup}><CloseIcon className="svgIcon"/></button>
            </div>
        </>
    )
}