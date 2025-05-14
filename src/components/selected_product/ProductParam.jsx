export const ProductParam = ({productProps}) => {
    if (!productProps)
        return (<p>Загрузка характеристик</p>)
    return (
        <div className="productParamWrapper">
            <div className="productParamName">
                <h3>Параметры</h3>
            </div>

             <div className="productParamContainer">
                <div className="productParamItem">
                    <p>Гарантия продавца</p>
                    <p>{productProps.warranty}</p>
                </div>

                <div className="productParamItem">
                    <p>Страна-производитель</p>
                    <p>{productProps.country_of_manufacture}</p>
                </div>

                <div className="productParamItem">
                    <p>Тип</p>
                    <p>{productProps.type}</p>
                </div>

                <div className="productParamItem">
                    <p>Бренд</p>
                    <p>{productProps.brand}</p>
                </div>

                <div className="productParamItem">
                    <p>Модель</p>
                    <p>{productProps.model}</p>
                </div>

                <div className="productParamItem">
                    <p>Цвет</p>
                    <p>{productProps.color}</p>
                </div>

                <div className="productParamItem">
                    <p>Операционная система</p>
                    <p>{productProps.operating_system}</p>
                </div>

                <div className="productParamItem">
                    <p>Модель процессора</p>
                    <p>{productProps.processor_model}</p>
                </div>

                <div className="productParamItem">
                    <p>Количество ядер</p>
                    <p>{productProps.core_count}</p>
                </div>

                <div className="productParamItem">
                    <p>Объем оперативной памяти</p>
                    <p>{productProps.ram_capacity}</p>
                </div>
                
                <div className="productParamItem">
                    <p>Объем встроенной памяти</p>
                    <p>{productProps.internal_memory_capacity}</p>
                </div>

                <div className="productParamItem">
                    <p>Количество камер</p>
                    <p>{productProps.camera_count}</p>
                </div>

                <div className="productParamItem">
                    <p>Количество мегапикселей</p>
                    <p>{productProps.megapixels}</p>
                </div>

                <div className="productParamItem">
                    <p>Материал корпуса</p>
                    <p>{productProps.body_material}</p>
                </div>

                <div className="productParamItem">
                    <p>Интерфейс</p>
                    <p>{productProps.interface}</p>
                </div>

                <div className="productParamItem">
                    <p>Емкость аккумулятора</p>
                    <p>{productProps.battery_capacity}</p>
                </div>

                <div className="productParamItem">
                    <p>Ширина</p>
                    <p>{productProps.width}</p>
                </div>

                <div className="productParamItem">
                    <p>Высота</p>
                    <p>{productProps.height}</p>
                </div>

                <div className="productParamItem">
                    <p>Толщина</p>
                    <p>{productProps.thickness}</p>
                </div>

                <div className="productParamItem">
                    <p>Вес</p>
                    <p>{productProps.weight}</p>
                </div>
            </div>
        </div>
    )
}