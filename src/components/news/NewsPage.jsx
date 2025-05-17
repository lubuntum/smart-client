import "../../styles/news.css"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { Breadcrumbs } from "../Breadcrumbs"
import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"

export const NewsPage = () => {
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

            <div className="newsWrapper">
                <div className="newsName">
                    <h2>Новости</h2>
                </div>

                <div className="newsContainer">
                    <div className="newsItem">
                        <p>02.04.2025</p>
                        <a>Какой купить внешний аккумулятор</a>
                        <p>При выборе внешнего аккумулятора (или powerbank) стоит учесть следующие факторы:</p>
                    </div>

                    <div className="newsItem">
                        <p>05.04.2025</p>
                        <a>Гаджеты в школу? Это норма!</a>
                        <p>Сегодня интеграция технологий в образовательный процесс стала неотъемлемой частью современной жизни.</p>
                    </div>

                    <div className="newsItem">
                        <p>08.04.2025</p>
                        <a>Умные часы для пожилых людей</a>
                        <p>Умные часы могут быть очень полезны для пожилых людей, так как они предлагают ряд функций, которые могут помочь в повседневной жизни.</p>
                    </div>

                    <div className="newsItem">
                        <p>14.04.2025</p>
                        <a>Смартфоны с мощным аккумулятор</a>
                        <p>На 2025 год, многие производители смартфонов предлагают модели с мощными аккумуляторами</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </>)
}