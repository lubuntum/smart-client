import categoryImage1 from "../../res/images/categoryImageTablet.webp"
import categoryImage2 from "../../res/images/categoryImageSmartphone.webp"
import categoryImage3 from "../../res/images/categoryImageHeadphones.webp"
import categoryImage4 from "../../res/images/categoryImageWatch.webp"
import categoryImage5 from "../../res/images/categoryImageAccesories.webp"

export const HomeCategory = () => {
    return (
        <div className="homeCategoryWrapper">
            <div className="homeCategoryName">
                <h2>Категории товаров</h2>
            </div>
            
            <div className="categoryGrid">
                <div className="categoryItem">
                    <div className="categoryItemTop">
                        <div className="categoryItemImage">
                            <img src={categoryImage1} alt=""></img>
                        </div>
                    </div>
                    <div className="categoryItemText">
                        <div className="categoryItemName">
                            <h3>Планшеты</h3>
                        </div>
                        <div className="categoryItemDescription">
                            <p>Описание</p>
                        </div>
                        <div className="categoryItemButton">
                            <button className="link">Посмотреть товары</button>
                        </div>
                    </div>
                </div>
                <div className="categoryItem">
                    <div className="categoryItemTop">
                        <div className="categoryItemImage">
                            <img src={categoryImage2} alt=""></img>
                        </div>
                    </div>
                    <div className="categoryItemText">
                        <div className="categoryItemName">
                            <h3>Смартфоны</h3>
                        </div>
                        <div className="categoryItemDescription">
                            <p>Описание</p>
                        </div>
                        <div className="categoryItemButton">
                            <button className="link">Посмотреть товары</button>
                        </div>
                    </div>
                </div>
                <div className="categoryItem">
                    <div className="categoryItemTop">
                        <div className="categoryItemImage">
                            <img src={categoryImage3} alt=""></img>
                        </div>
                    </div>
                    <div className="categoryItemText">
                        <div className="categoryItemName">
                            <h3>Наушники</h3>
                        </div>
                        <div className="categoryItemDescription">
                            <p>Описание</p>
                        </div>
                        <div className="categoryItemButton">
                            <button className="link">Посмотреть товары</button>
                        </div>
                    </div>
                </div>
                <div className="categoryItem">
                    <div className="categoryItemTop">
                        <div className="categoryItemImage">
                            <img src={categoryImage4} alt=""></img>
                        </div>
                    </div>
                    <div className="categoryItemText">
                        <div className="categoryItemName">
                            <h3>Смарт-часы</h3>
                        </div>
                        <div className="categoryItemDescription">
                            <p>Описание</p>
                        </div>
                        <div className="categoryItemButton">
                            <button className="link">Посмотреть товары</button>
                        </div>
                    </div>
                </div>
                <div className="categoryItem">
                    <div className="categoryItemTop">
                        <div className="categoryItemImage">
                            <img src={categoryImage5} alt=""></img>
                        </div>
                    </div>
                    <div className="categoryItemText">
                        <div className="categoryItemName">
                            <h3>Аксессуары</h3>
                        </div>
                        <div className="categoryItemDescription">
                            <p>Описание</p>
                        </div>
                        <div className="categoryItemButton">
                            <button className="link">Посмотреть товары</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}