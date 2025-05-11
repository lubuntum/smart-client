import { ReactComponent as CheckIcon } from "../../res/icons/verified_28dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as ListIcon } from "../../res/icons/list_alt_28dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as ReplyIcon } from "../../res/icons/reply_28dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as ShipIcon } from "../../res/icons/local_shipping_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

export const ProductInfo = () => {
    return (
        <div className="productInfoWrapper">
            <div className="productAdvGrid">
                <div className="productAdvItem">
                    <div className="productAdvIcon">
                        <CheckIcon className="svgIcon"/>
                    </div>
                    <h3>Нам доверяют</h3>
                    <p>С нами работают известные мировые производители</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvIcon">
                        <ListIcon className="svgIcon"/>
                    </div>
                    <h3>Обновление каталога</h3>
                    <p>Каталог товаров регулярно расширяется и пополняется</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvIcon">
                        <ReplyIcon className="svgIcon"/>
                    </div>
                    <h3>Гарантия возврата</h3>
                    <p>Не понравился товар? Мы вернем деньги</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvIcon">
                        <ShipIcon className="svgIcon"/>
                    </div>
                    <h3>Быстрая доставка</h3>
                    <p>Быстрая доставка по всей России</p>
                </div>
            </div>

            <div className="productHowName">
                <h2>Как заказать</h2>
            </div>

            <div className="productAdvGrid">
                <div className="productAdvItem">
                    <div className="productAdvText">
                        1
                    </div>
                    <h3>Оставьте заявку</h3>
                    <p>Заполните заявку на сайте или позвоните нам</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvText">
                        2
                    </div>
                    <h3>Мы перезваниваем</h3>
                    <p>Перезваниваем вам и обговариваем детали заказа</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvText">
                        3
                    </div>
                    <h3>Доставляем товар</h3>
                    <p>Осуществляем доставку по указанному вами адресу</p>
                </div>

                <div className="productAdvItem">
                    <div className="productAdvText">
                        4
                    </div>
                    <h3>Производите оплату</h3>
                    <p>Вы производите оплату любым удобным способом</p>
                </div>
            </div>
        </div>
    )
}