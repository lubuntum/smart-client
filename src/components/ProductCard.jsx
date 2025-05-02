import "../styles/product_card.css"

import { ReactComponent as CartIcon } from "../res/icons/shopping_cart_28dp_E3E3E3_FILL0_wght0_GRAD0_opsz24.svg"
import { ReactComponent as StarIcon } from "../res/icons/star_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { SERVER_URL } from "../services/api/urls"

export const ProductCard = ({ product }) => {
    return (
        <div className="productItem" key={product.id}>
            <div className="productItemTags">
                {product.tags.new && <div className="productNew">Новинка</div>}
                {product.tags.promo && <div className="productPromo">Акция</div>}
                <div className="productSale">{product.tags.discount}</div>
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
                <div className="productOldPrice">{product.old_price} ₽</div>
                <div className="productNewPrice">{product.price} ₽</div>
            </div>

            <div className="productItemButtons">
                <div className="productItemQuantity">
                    <button className="link">-</button>
                    <input type="number" defaultValue={1} min={1} max={product.itemsCount} />
                    <button className="link">+</button>
                </div>
                <button className="default">
                    <CartIcon className="svgIcon" />
                </button>
            </div>
        </div>
    )
}