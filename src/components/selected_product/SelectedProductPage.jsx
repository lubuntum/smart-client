import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { getItemsRequest } from "../../services/api/itemsAPI"

import { Breadcrumbs } from "../Breadcrumbs"
import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"
import { ProductSpec } from "./ProductSpec"
import { ProductDesc } from "./ProductDesc"
import { ProductParam } from "./ProductParam"
import { ProductDeliver } from "./ProductDeliver"
import { ProductReviews } from "./ProductReviews"
import { HomeProductSection } from "../home/HomeProductSection"
import { ProductInfo } from "./ProductInfo"

export const SelectedProductPage = () => {
    const location = useLocation()
    const [products, setProducts] = useState(null)
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

    useEffect(()=> {
        const getItems = async () => {
            try {
                const response = await getItemsRequest()
                response.data.forEach((item) => {
                    item.tags = JSON.parse(item.tags)
                })
                setProducts(response.data)
            } catch(err) {
                console.error(err)
            }
        }
        getItems()
    }, [])

    return (
        <>
            <HeaderComponent/>
            <div className="contentWrapper">
                <Breadcrumbs items={breadcrumbItems}/>
                <ProductSpec/>
                <ProductDesc/>
                <ProductParam/>
                <ProductDeliver/>
                <HomeProductSection sectionName={"Рекомендуемые"} tag={"promo"} data={products}/> {/* Макс. 5 элементов */}
                <HomeProductSection sectionName={"Похожие"} tag={"promo"} data={products}/> {/* Макс. 5 элементов */}
                <ProductInfo/>
            </div>
            <FooterComponent/>
        </>
    )
}