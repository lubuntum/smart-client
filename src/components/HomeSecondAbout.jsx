import { ReactComponent as EcoIcon } from "../res/icons/forest_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as HammerIcon } from "../res/icons/hardware_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ROUTES } from "../routes.js"

import ovalBarrelSauna from "../res/images/ovalBarrelSauna.webp"
import { useNavigate } from "react-router-dom"

export const HomeSecondAbout = () => {
    const navigate = useNavigate()

    return (
        <div className="secondAboutContainer">
            <div className="secondAboutLeft">
                <div className="aboutTitle">
                    <p>Деревенский стиль</p>
                </div>

                <div className="aboutSubtitle">
                    <p>Rustic Retreat: Ваш выбор для <br/> уюта и комфорта</p>
                </div>

                <div className="aboutDescription">
                    <p>Наши банные бочки — это сочетание традиционного дизайна и <br/> современных технологий, которые обеспечивают комфорт и <br/> долговечность.</p>
                </div>

                <div className="aboutDivider"></div>

                <div className="secondAboutAdvantages">
                    <div className="secondAboutAdvantagesItem">
                        <EcoIcon className="icon"/>
                        <p>Идеально подходят для <br/> отдыха на природе или в саду.</p>
                    </div>

                    <div className="secondAboutAdvantagesItem">
                        <HammerIcon className="icon"/>
                        <p>Каждая бочка создается <br/> вручную с вниманием к <br/> деталям.</p>
                    </div>
                </div>

                <div className="aboutButton">
                    <button onClick={() => navigate(ROUTES.PRODUCTS)}>Узнать больше о наших продуктах &#8594;</button>
                </div>
            </div>

            <div className="secondAboutRight">
                <div className="aboutImage">
                    <img src={ovalBarrelSauna}></img>
                </div>
            </div>
        </div>
    )
}