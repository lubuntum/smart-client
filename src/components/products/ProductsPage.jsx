import "../../styles/products.css"

import { FooterComponent } from "../footer/FooterComponent"
import { HeaderComponent } from "../header/HeaderComponent"
import { Breadcrumbs } from "../Breadcrumbs"
import { ProductsList } from "./ProductsList"

import { useEffect, useState } from "react"
import { getItemsRequest } from "../../services/api/itemsAPI"
import { Pagination } from "../Pagination"
import { useLocation } from "react-router-dom"

export const ProductsPage = () => {
    const [breadcrumbItems, setBreadcrumbItems] = useState([{ label: "Главная", path: "/" },])
    const location = useLocation()
    const [products, setProducts] = useState(null)
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
    useEffect(()=> {
        console.log(location.state)
        setBreadcrumbItems(prev => ([...prev, {label: location.state, path: ""}]))
    }, [])
    return (
        <>
            <HeaderComponent/>
            <div className="contentWrapper">
                <Breadcrumbs items={breadcrumbItems}/>
                <ProductsList productListName={"Здесь название категории или бренда"} tag={"promo"} data={products}/>
                <Pagination/>
            </div>
            <FooterComponent/>
        </>
    )
}