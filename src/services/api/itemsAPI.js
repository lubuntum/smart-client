import axios from "axios"
import { ITEMS, SERVER_URL } from "./urls"
export const getItemsRequest = async (name, brandName, categoryName, price ) => {
    const response = await axios.get(`${SERVER_URL}${ITEMS}`, {
        params:{
            name: name, 
            brandName: brandName,
            categoryName: categoryName,
            price: price
        }
    })
    response.data.forEach((item) => {
                    item.tags = JSON.parse(item.tags)
                    item.item_props = JSON.parse(item.item_props)
                })
    return response
}