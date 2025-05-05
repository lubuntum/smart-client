import { ProductCard } from "../ProductCard"

export const HomeProductSection = ({ sectionName, tag, data, sectionButtonLink }) => {
    return (
        <div className="homeProductContainer">
            <div className='productSectionName'>
                <h2>{sectionName}</h2>
            </div>

            {data && 
            <div className="productGrid">
                {data.map(product => (
                    product.tags[tag] &&
                        <ProductCard product={product} key={product.id}/>
                ))}
            </div>}
            
            <button className="white" onClick={sectionButtonLink}>Показать еще</button>
        </div>
    )
}