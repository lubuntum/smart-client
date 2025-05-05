import "../../styles/products.css"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"
import { Breadcrumbs } from "../Breadcrumbs"
import { ProductsList } from "./ProductsList"
import { Pagination } from "../Pagination"

import { getItemsRequest } from "../../services/api/itemsAPI"

export const ProductsPage = () => {
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
                <ProductsList productListName={location.state} data={products}/>
                <Pagination/>
            </div>
            <FooterComponent/>
        </>
    )
}