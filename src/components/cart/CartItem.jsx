import testImage from "../../res/images/aboutImageWatch.webp"

import { ReactComponent as CloseIcon } from "../../res/icons/close_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

export const CartItem = () => {
    return (
        <div className="cartItemContainer">
            <div className="cartItemDescContainer">
                <div className="cartItemImage">
                    <img src={testImage} alt=""></img>
                </div>

                <div className="cartItemDesc">
                    <p>Название</p>
                    <p>Артикул: 12345678</p>
                    <p>Акция: Скидка 5%</p>
                </div>
            </div>

            <div className="productItemPrice">
                <div className="productOldPrice">1000 ₽</div>
                <div className="productNewPrice">1000 ₽</div>
            </div>

            <div className="productItemButtons">
                <div className="productItemQuantity">
                    <button className="link">-</button>
                    <input type="number" value={1} min={1}/>
                    <button className="link">+</button>
                </div>
            </div>

            <div className="cartItemTotalPrice">2000 ₽</div>

            <div className="cartItemDelete"><CloseIcon className="svgIcon"/></div>
        </div>
    )
}