import "../styles/product_card.css"

import { ReactComponent as CartIcon } from "../res/icons/shopping_cart_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as StarIcon } from "../res/icons/star_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { SERVER_URL } from "../services/api/urls"
 import { useContext, useState } from "react"
import { useBasket } from "../services/basket/BasketProvider"

export const ProductCard = ({ product }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value)
    }
    const [pickedCount, setPickedCount] = useState(1)
    const {addItem} = useBasket()

    const setPickedCountHandler = (count) => {
        if (count < 1) return
        setPickedCount(Number(count))
    }
    const addItemHandler = () => {
        const productTemp = {...product}
        product.tags.discount ?
            productTemp.totalPrice = Number(((product.price - (product.price * product.tags.discount)) * pickedCount).toFixed(2)) :
            productTemp.totalPrice = Number((product.price * pickedCount).toFixed(2))
        productTemp.pickedCount = pickedCount
        setPickedCount(1)
        addItem(productTemp)
    }
    
    return (
        <div className="productItem" key={product.id}>
            <div className="productItemTags">
                {product.tags.new && <div className="productNew">Новинка</div>}
                {product.tags.promo && <div className="productPromo">Акция</div>}
                <div className="productSale">{product.tags.discount*100}%</div>
            </div>

            <div className="productItemImageWrapper">
                <div className="productItemImage">
                    <img src={`${SERVER_URL}${product.preview_image}`} alt={product.name} />
                </div>
            </div>

            <div className="productItemArt">{product.articul}</div>

            <div className="productItemName">{product.name}</div>

            <div className="productItemBrand">
                <button className="link">{product.brand}</button>
            </div>

            <div className="productItemRating">
                Рейтинг: {product.rating} <StarIcon className="svgIcon" />
            </div>

            <div className="productItemCount">В наличии: {product.count}</div>

            <div className="productItemPrice">
                {product.tags.discount ? <>
                    <div className="productOldPrice">{formatCurrency(product.price * pickedCount)} ₽</div>
                    <div className="productNewPrice">{formatCurrency((product.price - (product.price * product.tags.discount)) * pickedCount)}</div>
                </> : <div className="productNewPrice">{formatCurrency(product.price * pickedCount)}</div>}
                
            </div>

            <div className="productItemButtons">
                <div className="productItemQuantity">
                    <button className="link" onClick={() => setPickedCountHandler(pickedCount - 1)} >-</button>
                    <input type="number" value={pickedCount} min={1} max={product.itemsCount} onChange={(e) => setPickedCountHandler(e.target.value)} />
                    <button className="link" onClick={() => setPickedCountHandler(pickedCount + 1)}>+</button>
                </div>
                <button className="default" onClick={addItemHandler} >
                    <CartIcon className="svgIcon" />
                </button>
            </div>
        </div>
    )
}