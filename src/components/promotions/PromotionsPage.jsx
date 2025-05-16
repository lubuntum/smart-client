import "../../styles/promotions.css"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { Breadcrumbs } from "../Breadcrumbs"
import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"

import promotionsImage1 from "../../res/images/promotionsImage1.png"
import promotionsImage2 from "../../res/images/promotionsImage2.png"
import promotionsImage3 from "../../res/images/promotionsImage3.png"

export const PromotionsPage = () => {
    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = useState([{ label: "Главная", path: "/" }])
    
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

    return (<>
        <HeaderComponent/>
        <div className="contentWrapper">
            <Breadcrumbs items={breadcrumbItems}/>

            <div className="promotionsWrapper">
                <div className="promotionsName">
                    <h2>Акции</h2>
                </div>

                <div className="promotionsContainer">
                    <div className="promotionsItem">
                        <div className="promotionsImage">
                            <img src={promotionsImage1} alt=""></img>
                        </div>
                        <p>+3% кэшбэк</p>
                        <p>Получайте дополнительные бонусы</p>
                        <button className="default">Подробнее</button>
                    </div>

                    <div className="promotionsItem">
                        <div className="promotionsImage">
                            <img src={promotionsImage2} alt=""></img>
                        </div>
                        <p>Обвал цен</p>
                        <p>Смарт-часы со скидками</p>
                        <button className="default">Заказать сейчас</button>
                    </div>

                    <div className="promotionsItem">
                        <div className="promotionsImage">
                            <img src={promotionsImage3} alt=""></img>
                        </div>
                        <p>Скидки 23%</p>
                        <p>Выберайте подарок родынм со скидками!</p>
                        <button className="default">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </>)
}