import { ReactComponent as UpdateIcon } from "../../res/icons/autorenew_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as CarIcon } from "../../res/icons/local_shipping_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as MoneyIcon } from "../../res/icons/savings_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as MallIcon } from "../../res/icons/local_mall_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as RightArrowIcon } from "../../res/icons/arrow_forward_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as OperatorIcon } from "../../res/icons/support_agent_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

import aboutImage1 from "../../res/images/aboutImageSmartphone.webp"
import aboutImage2 from "../../res/images/aboutImageWatch.webp"


export const HomeAbout = () => {
    return (
        <div className="homeAboutWrapper">
            <div className="homeAboutContainer">
                <h2>Магазин смартфонов и аксессуаров</h2>

                <p>Рынок мобильных телефонов на сегодня представлен необъятным разнообразием моделей, а магазинов, салонов и торговых сетей, специализирующихся на продаже мобильной техники, гаджетов и аксессуаров становится все больше и больше.</p>

                <p>Однако, у большинства салонов, сетей и магазинов есть один большой недочет: офлайн-магазин всегда закладывает в цену телефона, помимо себестоимости и небольшого процента, еще и стоимость аренды помещений магазина/склада, зарплату сотрудников и иные издержки. В итоге на витрине магазине Вы видите неоправданно высокие цены.</p>

                <p>В то время как наш магазин предлагает максимально низкие цены на всю продукцию, без сторонних наценок, с гарантией и сервисным обслуживанием, а также с доставкой по всей России.</p>
            </div>

            <div className="aboutGrid">
                <div className="aboutItem">
                    <div className="aboutItemIcon">
                        <UpdateIcon className="svgIcon"/>
                    </div>

                    <div className="aboutItemText">
                        Обновление коллекции <br/> каждый месяц
                    </div>
                </div>

                <div className="aboutItem">
                    <div className="aboutItemIcon">
                        <CarIcon className="svgIcon"/>
                    </div>

                    <div className="aboutItemText">
                        Экспресс-доставка по всей <br/> России
                    </div>
                </div>

                <div className="aboutItem">
                    <div className="aboutItemIcon">
                        <MoneyIcon className="svgIcon"/>
                    </div>

                    <div className="aboutItemText">
                        Доступные цены прямо от <br/> производителя
                    </div>
                </div>

                <div className="aboutItem">
                    <div className="aboutItemIcon">
                        <MallIcon className="svgIcon"/>
                    </div>

                    <div className="aboutItemText">
                        Более миллиона <br/> наименований товаров
                    </div>
                </div>
            </div>

            <div className="aboutPromotionGrid">
                <div className="aboutPromotionItem aboutPromotionItem1">
                    <div className="aboutPromotionText">
                        <h2>+3% кэшбэк</h2>
                        <p>Получайте дополнительные бонусы</p>
                        <div className="aboutPromotionButton">
                            <button className="default">Купить<RightArrowIcon className="svgIcon"/></button>
                        </div>
                    </div>
                    
                    <div className="aboutPromotionImageWrapper">
                        <div className="aboutPromotionImage">
                            <img src={aboutImage1} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="aboutPromotionItem aboutPromotionItem2">
                    <div className="aboutPromotionText">
                        <h2>Обвал цен</h2>
                        <p>Смарт-часы со скидками</p>
                        <div className="aboutPromotionButton">
                            <button className="default">Купить<RightArrowIcon className="svgIcon"/></button>
                        </div>
                    </div>
                    
                    <div className="aboutPromotionImageWrapper">
                        <div className="aboutPromotionImage">
                            <img src={aboutImage2} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutQuestion">
                <div className="aboutQuestionText">
                    <OperatorIcon className="svgIcon"/>

                    <div className="aboutQuestionDesc">
                        <h3>Есть вопросы?</h3>
                        <p>Наш менеджер перезвонит вам в самое ближайшеее время</p>
                    </div>
                </div>

                <button className="default">Задать вопрос</button>
            </div>
        </div>
    )
}