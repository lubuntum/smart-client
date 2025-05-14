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
                                    <div className="productOldPrice">{formatCurrency(item.price * 1)} ₽</div>
                                    <div className="productNewPrice">{formatCurrency((item.price - (item.price * item.tags.discount)) * 1)}</div>
                                </> : 
                                    <div className="productNewPrice">{formatCurrency(item.price * 1)}</div>}
                            </div>

            <div className="productItemButtons">
                <div className="productItemQuantity">
                    <button className="link">-</button>
                    <input type="number" value={1} min={1}/>
                    <button className="link">+</button>
                </div>
            </div>

            <div className="cartItemTotalPrice">2000 ₽</div>

            <div className="cartItemDelete" onClick={()=> removeItem(item.id)}><CloseIcon className="svgIcon"/></div>
        </div>
    )
}