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
import { useState } from "react"
import { useBasket } from "../../services/basket/BasketProvider"
import { formatCurrency } from "../../services/money/format"

export const ProductSpec = ({product}) => {
    const [pickedCount, setPickedCount] = useState(1)
    const setPickedCountHandler = (count) => {
        if (count < 1) return
        setPickedCount(Number(count))
    }
    const {addItem} = useBasket()
    const addItemHandler = () => {
        const productTemp = {...product}
        product.tags.discount ?
            productTemp.totalPrice = Number(((product.price - (product.price * product.tags.discount)) * pickedCount).toFixed(2)) :
            productTemp.totalPrice = Number((product.price * pickedCount).toFixed(2))
        productTemp.pickedCount = pickedCount
        setPickedCount(1)
        addItem(productTemp)
    }
    if (!product) return (
        <>
            <div className="productSpecWrapper">
                <p>Загрузка</p>
            </div>
        </>
    )
    
    return (
        <div className="productSpecWrapper">
            <div className="productSpecName">
                <h2>{product.name}</h2>
            </div>

            <div className="productSpecContainer">
                <div className="productItemTags">
                    {product.tags.new && <div className="productNew">Новинка</div>}
                    {product.tags.promo && <div className="productPromo">Акция</div>}
                    {product.tags.discount && <div className="productSale">{product.tags.discount*100}%</div>}
                </div>

                <div className="productSpecContainerWrapper">
                    <div className="productSpecLeft">
                        <div className="productSpecImage">
                            <img src={testImage} alt=""></img>
                        </div>

                        <div className="productSpecDesc">
                            <div className="productSpecArt">Артикул: {product.articul}</div>

                            <div className="productSpecRating">
                                Рейтинг: {product.rating} <StarIcon className="svgIcon"/>
                            </div>

                            <div className="productSpecBrand">
                                <button className="link">{product.brand}</button>
                            </div>

                            <div className="productSpecPlatform">
                                <p>Платформа</p>
                                <p>{product.platform}</p>
                            </div>

                            <div className="productSpecType">
                                <p>Тип</p>
                                <p>{product.type}</p>
                            </div>
                        </div>
                    </div>

                    <div className="productSpecRight">
                        <div className="productSpecPriceConatiner">
                            <div className="productSpecPrice">
                                {product.tags.discount ? 
                                <>
                                    <div className="productOldPrice">{formatCurrency(product.price * pickedCount)} ₽</div>
                                    <div className="productNewPrice">{formatCurrency((product.price - (product.price * product.tags.discount)) * pickedCount)}</div>
                                </> : 
                                    <div className="productNewPrice">{formatCurrency(product.price * pickedCount)}</div>}
                            </div>

                            <div className="productItemCount">В наличии: {product.current_count}</div>
                        </div>

                        <div className="productSpecButtons">
                            <div className="productSpecQuantity">
                                <button className="link" onClick={() => setPickedCountHandler(pickedCount - 1)}>-</button>
                                <input type="number" min={1} max={product.current_count} value={pickedCount} onChange={e => setPickedCountHandler(e.target.value)}/>
                                <button className="link" onClick={() => setPickedCountHandler(pickedCount + 1)}>+</button>
                            </div>
                            <button onClick={addItemHandler} className="default">
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