import { HeaderComponent } from "../header/HeaderComponent"

export const OrdersList = ({orders}) => {

    return (<div className="ordersWrapper">
        {!orders && <p>Грузим ...</p>}
        {orders && orders.map(order => (
            <div className="orderWrapper">
                <div className="orderTitle">
                    <p>Статус заказа: {order.status}</p>
                    <p>Дата {order.createdAt}</p>
                </div>
                <div className="itemsWrapper">
                    {order.items.map((item, index) => (
                        <div className="itemWrapper">
                            <p>{index + 1}. Наименование позиции: {item.name}</p>
                            <p>Цена позиции: {item.price}</p>
                            <p>Артикул: {item.articul}</p>
                        </div>
                    ))}
                </div>
                
                {order.status === "Создан" && <button>Подтвердить заказ</button>}
                {order.status === "Готов" && <button>Подтвердить выдачу</button>}
            </div>
        ))}
    </div>)
}