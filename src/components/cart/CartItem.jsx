import testImage from "../../res/images/aboutImageWatch.webp"

import { ReactComponent as CloseIcon } from "../../res/icons/close_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { formatCurrency } from "../../services/money/format"
import { useBasket } from "../../services/basket/BasketProvider"
import { SERVER_URL } from "../../services/api/urls"

export const CartItem = ({item}) => {
    const {removeItem} = useBasket()
    return (
        <div className="cartItemContainer">
            <div className="cartItemDescContainer">
                <div className="cartItemImage">
                    <img src={`${SERVER_URL}${item.preview_image}`} alt=""></img>
                </div>

                <div className="cartItemDesc">
                    <p>{item.name}</p>
                    <p>Артикул: {item.articul}</p>
                    <p>Акция: {item.tags.discount*100}%</p>
                </div>
            </div>

            <div className="productItemPrice">
                                {item.tags.discount ? 
                                <>
                                    <div className="productOldPrice">{formatCurrency(item.price * item.pickedCount)} ₽</div>
                                    <div className="productNewPrice">{formatCurrency((item.price - (item.price * item.tags.discount)) * item.pickedCount)}</div>
                                </> : 
                                    <div className="productNewPrice">{formatCurrency(item.price * item.pickedCount)}</div>}
                            </div>

            <div className="productItemButtons">
                <div className="productItemQuantity">
                    <button className="link">-</button>
                    <input type="number" value={item.pickedCount} min={1}/>
                    <button className="link">+</button>
                </div>
            </div>

            <div className="cartItemTotalPrice">{formatCurrency((item.price - (item.price * item.tags.discount)) * item.pickedCount)} ₽</div>

            <div className="cartItemDelete" onClick={()=> removeItem(item.id)}><CloseIcon className="svgIcon"/></div>
        </div>
    )
}