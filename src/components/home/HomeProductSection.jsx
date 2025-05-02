import { ProductCard } from "../ProductCard"

export const HomeProductSection = ({ sectionName, data, sectionButtonLink }) => {
    return (
        <div className="homeProductContainer">
            <div className='productSectionName'>
                <h2>{sectionName}</h2>
            </div>

            <div className="productGrid">
                {data.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>

            <button className="white" onClick={sectionButtonLink}>Показать еще</button>
        </div>
    )
}