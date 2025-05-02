import "../../styles/home.css"

import producImageTest from "../../res/images/categoryImageAccesories.webp"

import { HeaderComponent } from "../header/HeaderComponent"
import { HomeBanner } from "./HomeBanner"
import { HomeCategory } from "./HomeCategory"
import { HomeProductSection } from "./HomeProductSection"
import { HomeAbout } from "./HomeAbout"
import { HomeReviews } from "./HomeReviews"
import { FooterComponent } from "../footer/FooterComponent"

export const HomePage = () => {
    const products = [
        {
            id: 1,
            image: producImageTest,
            art: 'Арт.: 123456789',
            name: 'Galaxy S21 Ultra White',
            brand: 'Samsung',
            rating: '4.8',
            count: 25,
            oldPrice: 28300,
            newPrice: 22100,
            tags: {
                new: true,
                promo: true,
                sale: '-5%',
            },
        },
        {
            id: 2,
            image: producImageTest,
            art: 'Арт.: 987654321',
            name: 'iPhone 13 Pro Max',
            brand: 'Apple',
            rating: '4.8',
            count: 15,
            oldPrice: 99900,
            newPrice: 89900,
            tags: {
                new: true,
                promo: false,
                sale: '-10%',
            },
        },
        {
            id: 3,
            image: producImageTest,
            art: 'Арт.: 456789123',
            name: 'Google Pixel 6',
            brand: 'Google',
            rating: '4.8',
            count: 30,
            oldPrice: 59900,
            newPrice: 49900,
            tags: {
                new: false,
                promo: true,
                sale: '-20%',
            },
        },
        {
            id: 4,
            image: producImageTest,
            art: 'Арт.: 321654987',
            name: 'OnePlus 9 Pro',
            brand: 'OnePlus',
            rating: '4.8',
            count: 20,
            oldPrice: 64900,
            newPrice: 54900,
            tags: {
                new: false,
                promo: true,
                sale: '-15%',
            },
        },
        {
            id: 5,
            image: producImageTest,
            art: 'Арт.: 159753486',
            name: 'Xiaomi Mi 11',
            brand: 'Xiaomi',
            rating: '4.8',
            count: 10,
            oldPrice: 49900,
            newPrice: 39900,
            tags: {
                new: true,
                promo: false,
                sale: '-20%',
            },
        },
    ];

    return (
        <>
            <HeaderComponent/>
            <div className="contentWrapper">
                <HomeBanner/>
                <HomeCategory/>
                <HomeProductSection sectionName={"Хиты продаж"} data={products}/>
                <HomeProductSection sectionName={"Новинки"} data={products}/>
                <HomeAbout/>
                <HomeReviews/>
            </div>
            <FooterComponent/>
        </>
    )
}