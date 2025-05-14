export const ProductDesc = ({description}) => {
    return (
        <div className="productDescWrapper">
            <div className="productDescName">
                <h3>Описание</h3>
            </div>

            <div className="productDescText">
                <p>{description}</p>
            </div>
        </div>
    )
}