import { VerticalCarousel } from "../VerticalCarousel"

import { ReactComponent as RightArrowIcon } from "../../res/icons/arrow_forward_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

import bannerImage1 from "../../res/images/bannerImageiPhone15.webp"
import bannerImage2 from "../../res/images/bannerImageJBL.webp"
import bannerImage3 from "../../res/images/bannerImgaeXiaomi.webp"

export const HomeBanner = () => {
    const slides = [
        <div className="slideItem slideItem1">
            <div className="slideItemText">
                <div className="slideItemName">
                    <h1>iPhone 15 White Apple</h1>
                </div>
                <div className="slideItemSubname">
                    <p>Для истинных ценителей</p>
                </div>
                <div className="slideItemButton">
                    <button className="default">Посмотреть товар<RightArrowIcon className="svgIcon"/></button>
                </div>
            </div>
            <div className="slideItemImage">
                <img src={bannerImage1} alt=""></img>
            </div>
        </div>,
        <div className="slideItem slideItem2">
            <div className="slideItemText">
                <div className="slideItemName">
                    <h1>JBL Live 670NC White</h1>
                </div>
                <div className="slideItemSubname">
                    <p>Большая распродажа</p>
                </div>
                <div className="slideItemButton">
                    <button className="default">Посмотреть товар<RightArrowIcon className="svgIcon"/></button>
                </div>
            </div>
            <div className="slideItemImage">
                <img src={bannerImage2} alt=""></img>
            </div>
        </div>,
        <div className="slideItem slideItem3">
            <div className="slideItemText">
                <div className="slideItemName">
                    <h1>Xiaomi Mi Band 6 Black</h1>
                </div>
                <div className="slideItemSubname">
                    <p>Уже в продаже</p>
                </div>
                <div className="slideItemButton">
                    <button className="default">Посмотреть товар<RightArrowIcon className="svgIcon"/></button>
                </div>
            </div>
            <div className="slideItemImage">
                <img src={bannerImage3} alt=""></img>
            </div>
        </div>
    ]

    return (
        <div className="homeBannerWrapper">
            <VerticalCarousel slides={slides} carouselHeigth={400}/>
        </div>
    )
}