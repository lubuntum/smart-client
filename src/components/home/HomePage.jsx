import "../../styles/home.css"

import producImageTest from "../../res/images/categoryImageAccesories.webp"

import { HeaderComponent } from "../header/HeaderComponent"
import { HomeBanner } from "./HomeBanner"
import { HomeCategory } from "./HomeCategory"
import { HomeProductSection } from "./HomeProductSection"
import { HomeAbout } from "./HomeAbout"
import { HomeReviews } from "./HomeReviews"
import { FooterComponent } from "../footer/FooterComponent"
import { useEffect, useState } from "react"
import { getItemsRequest } from "../../services/api/itemsAPI"

export const HomePage = () => {
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
    

    return (
        <>
            <HeaderComponent/>
            <div className="contentWrapper">
                <HomeBanner/>
                <HomeCategory/>
                <HomeProductSection sectionName={"Хиты продаж"} tag={"promo"} data={products}/>
                <HomeProductSection sectionName={"Новинки"} tag={"new"} data={products}/>
                <HomeAbout/>
                <HomeReviews/>
            </div>
            <FooterComponent/>
        </>
    )
}