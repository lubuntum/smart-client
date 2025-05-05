import axios from "axios"
import { ITEMS, SERVER_URL } from "./urls"
export const getItemsRequest = async (name, brandName, categoryName, price ) => {
    return await axios.get(`${SERVER_URL}${ITEMS}`, {
        params:{
            name: name, 
            brandName: brandName,
            categoryName: categoryName,
            price: price
        }
    })
}