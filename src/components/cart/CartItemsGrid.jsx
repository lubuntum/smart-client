import { useState } from "react"
import { createOrderRequest } from "../../services/api/orderApi"
import { useBasket } from "../../services/basket/BasketProvider"
import { CartItem } from "./CartItem"
import { CartPrice } from "./CartPrice"
import { STATUSES } from "../../statuses"
export const CartItemsGrid = ({basket}) => {
    const {clearItems} = useBasket()
    const [status, setStatus] = useState(STATUSES.IDLE)
    const createOrder = async () => {
        try {
            console.log(basket)
            const response = await createOrderRequest(basket)
            clearItems()
            setStatus(STATUSES.SUCCESS)
            setTimeout(()=> setStatus(STATUSES.IDLE), 5000)
        } catch(err) {
            console.error(err)
        }
    }
    return (
        <div className="cartWrapper">
            <div className="cartName">
                <h2>Корзина</h2>
            </div>

            <div className="cartContainer">
                <div className="cartItemsGrid">
                    {basket.map(item => (
                        <CartItem item={item} />
                    ))}
                </div>
                
                <CartPrice/>

            </div>

            <div className="cartClear">
                <button className="transparent">Очистить корзину</button>
            </div>

            <div className="cartDeliverName">
                <h2>Доставка</h2>
            </div>

            <fieldset id="radioGroup1">
                <div className="cartDeliverContainer">
                    <div className="cartDeliverItemContainer">
                        <input type="radio" id="radio1" name="radioGroup1"/>
                        <label for="radio1">Почта России - Бесплатно</label>
                    </div>
                    <div className="cartDeliverItemContainer">
                        <input type="radio" id="radio2" name="radioGroup1"/>
                        <label for="radio2">EMS</label>
                    </div>
                    <div className="cartDeliverItemContainer">
                        <input type="radio" id="radio3" name="radioGroup1"/>
                        <label for="radio3">Курьер - 1 500 р.</label>
                    </div>
                    <div className="cartDeliverItemContainer">
                        <input type="radio" id="radio4" name="radioGroup1"/>
                        <label for="radio4">Самовывоз - Бесплатно</label>
                    </div>
                </div>
            </fieldset>

            <div className="cartDeliverName">
                <h2>Форма заказа</h2>
            </div>

            <div className="cartFormContainer">
                <input placeholder="ФИО *" required></input>
                <input placeholder="Адрес доставки *" required></input>
                <input placeholder="Телефон *" required></input>
                <input placeholder="Email *" required></input>
            </div>

            <div className="cartFromPersonalData">
                <input type="checkbox" id="checkbox1"></input>
                <label for="checkbox1">Я согласен(а) на обработку моих персональных данных *</label>
            </div>

            <div className="cartDone">
                <button className="default" onClick={createOrder}>{status === STATUSES.SUCCESS ? 'Заказ успешно создан' : "Создать заказ"}</button>
            </div>
        </div>
    )
}