import "../../styles/selected_product.css"

import testImage from "../../res/images/aboutImageWatch.webp"

import { ReactComponent as CartIcon } from "../../res/icons/shopping_cart_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as StarIcon } from "../../res/icons/star_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as TruckIcon } from "../../res/icons/local_shipping_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as BoxIcon } from "../../res/icons/unarchive_28dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as VkIcon } from "../../res/icons/1646921_vk_vkontakte_icon.svg"
import { ReactComponent as ClassIcon } from "../../res/icons/1646924_odnoklassniki_icon.svg"
import { ReactComponent as TelegramIcon } from "../../res/icons/icons8-telegram.svg"
import { ReactComponent as ViberIcon } from "../../res/icons/icons8-viber.svg"
import { ReactComponent as WhatsUpIcon } from "../../res/icons/icons8-whatsapp.svg"

export const ProductSpec = () => {
    return (
        <div className="productSpecWrapper">
            <div className="productSpecName">
                <h2>Название продукта</h2>
            </div>

            <div className="productSpecContainer">
                <div className="productItemTags">
                    <div className="productNew">Новинка</div>
                    <div className="productPromo">Акция</div>
                    <div className="productSale">-10%</div>
                </div>

                <div className="productSpecContainerWrapper">
                    <div className="productSpecLeft">
                        <div className="productSpecImage">
                            <img src={testImage} alt=""></img>
                        </div>

                        <div className="productSpecDesc">
                            <div className="productSpecArt">Артикул: 1234567</div>

                            <div className="productSpecRating">
                                Рейтинг: 2.5 <StarIcon className="svgIcon"/>
                            </div>

                            <div className="productSpecBrand">
                                <button className="link">Brand</button>
                            </div>

                            <div className="productSpecPlatform">
                                <p>Платформа</p>
                                <p>Android</p>
                            </div>

                            <div className="productSpecType">
                                <p>Тип</p>
                                <p>Планшет</p>
                            </div>
                        </div>
                    </div>

                    <div className="productSpecRight">
                        <div className="productSpecPriceConatiner">
                            <div className="productSpecPrice">
                                <div className="productOldPrice">1 680 ₽</div>
                                <div className="productNewPrice">1 680 ₽</div>
                            </div>

                            <div className="productItemCount">В наличии: 100</div>
                        </div>

                        <div className="productSpecButtons">
                            <div className="productSpecQuantity">
                                <button className="link">-</button>
                                <input type="number" min={1} value={1}/>
                                <button className="link">+</button>
                            </div>
                            <button className="default">
                                <CartIcon className="svgIcon"/>
                            </button>
                        </div>

                        <div className="porudctSpecDeliver">
                            <div className="deliverText"><BoxIcon className="svgIcon"/>Самовывоз</div>
                            <div className="deliverText"><TruckIcon className="svgIcon"/>Доставка</div>
                        </div>

                        <div className="productSpecShare">
                            <p>Поделиться</p>
                            <div className="productSpecShareContainer">
                                <div className="share"><VkIcon className="svgIcon"/></div>
                                <div className="share"><ClassIcon className="svgIcon"/></div>
                                <div className="share"><TelegramIcon className="svgIcon"/></div>
                                <div className="share"><ViberIcon className="svgIcon"/></div>
                                <div className="share"><WhatsUpIcon className="svgIcon"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}