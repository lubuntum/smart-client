import { ProductCard } from "../ProductCard"

export const ProductsList = ({ productListName, tag, data }) => {
    return (
        <div className="productsListWrapper">
            <div className="productsListName">
                <h2>{productListName}</h2>
            </div>
            
            {(data && tag) && 
            <div className="productListGrid">
                {data.map(product => (
                    product.tags[tag] &&
                        <ProductCard product={product} key={product.id}/>
                ))}
            </div>}

            {(data && !tag) &&             
            <div className="productListGrid">
                {data.map(product => (
                    <ProductCard product={product} key={product.id}/>
            ))}
            </div>}
        </div>
    )
}