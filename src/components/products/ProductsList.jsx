import { ProductCard } from "../ProductCard"

export const ProductsList = ({ categoryName, tag, data }) => {
    console.log(data)
    return (
        <div className="productsListWrapper">
            <div className="productsListName">
                <h2>{categoryName}</h2>
            </div>
            {(data) &&             
            <div className="productListGrid">
                {data.map(product => (
                    (product.category === categoryName)
                        && <ProductCard product={product} key={product.id}/>
            ))}
            </div>}
        </div>
    )
}