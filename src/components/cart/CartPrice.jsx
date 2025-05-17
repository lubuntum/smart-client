import { useEffect, useState } from "react"

export const CartPrice = ({basket}) => {
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        setTotal(basket.reduce((acc, item) => acc + item.price, 0))
    }, [basket])
    return (
        <div className="cartPriceContainer">
            <div className="cartPriceItem">
                <p>Сумма:</p>
                <p>{(total * 0.9).toFixed(2)} ₽</p>
            </div>
            <div className="cartPriceItem">
                <p>В том числе НДС 10%:</p>
                <p>{(total * 0.1).toFixed(2)} ₽</p>
            </div>
            <div className="cartPriceItem">
                <p>Итого:</p>
                <p>{total} ₽</p>
            </div>
        </div>
    )
}