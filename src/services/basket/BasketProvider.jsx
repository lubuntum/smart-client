import { createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie';
const BasketContext = createContext()
export const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState(()=> {
        const savedBasket = Cookies.get('basket')
        return savedBasket ? JSON.parse(savedBasket) : []
    })

    const addItem = (item) => {
        setBasket((prev) => ([...prev, item]))
    }
    const removeItem = (itemId) => {
        setBasket((prev) => prev.filter(item => item.id !== itemId))
    }
    const clearItems = () => {
        setBasket([])
    }
    useEffect(() => {
        console.log("current basket", basket)
        Cookies.set('basket', JSON.stringify(basket), {expires: 7})
    }, [basket])
    return (
        <BasketContext.Provider value={{basket, addItem, removeItem, clearItems}}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => {
    return useContext(BasketContext)
}