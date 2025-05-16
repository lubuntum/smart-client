export const ProductParam = ({productProps}) => {
    if (!productProps) return <p>Загрузка</p>
    const productProperties = [
        { label: "Гарантия продавца", value: productProps.warranty },
        { label: "Страна-производитель", value: productProps.country_of_manufacture },
        { label: "Тип", value: productProps.type },
        { label: "Бренд", value: productProps.brand },
        { label: "Модель", value: productProps.model },
        { label: "Цвет", value: productProps.color },
        { label: "Операционная система", value: productProps.operating_system },
        { label: "Модель процессора", value: productProps.processor_model },
        { label: "Количество ядер", value: productProps.core_count },
        { label: "Объем оперативной памяти", value: productProps.ram_capacity },
        { label: "Объем встроенной памяти", value: productProps.internal_memory_capacity },
        { label: "Количество камер", value: productProps.camera_count },
        { label: "Количество мегапикселей", value: productProps.megapixels },
        { label: "Материал корпуса", value: productProps.body_material },
        { label: "Интерфейс", value: productProps.interface },
        { label: "Емкость аккумулятора", value: productProps.battery_capacity },
        { label: "Ширина", value: productProps.width },
        { label: "Высота", value: productProps.height },
        { label: "Толщина", value: productProps.thickness },
        { label: "Вес", value: productProps.weight },
    ];
    if (!productProps)
        return (<p>Загрузка характеристик</p>)
    return (
        <div className="productParamWrapper">
            <div className="productParamName">
                <h3>Параметры</h3>
            </div>

             <div className="productParamContainer">
                {productProperties.map((prop, index) => 
                    prop.value && (
                        <div className="productParamItem" key={index}>
                            <p>{prop.label}</p>
                            <p>{prop.value}</p>
                        </div>))}
            </div>
        </div>
    )
}