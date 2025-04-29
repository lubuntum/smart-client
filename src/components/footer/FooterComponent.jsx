import "../../styles/footer.css"

import { ReactComponent as VkIcon } from "../../res/icons/VkontakteFill.svg"
import { ReactComponent as TelegramIcon } from "../../res/icons/Telegram.svg"
import { ReactComponent as YoutubeIcon } from "../../res/icons/YoutubeFill.svg"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../routes"

export const FooterComponent = () => {
    const navigate = useNavigate()

    return (
        <footer>
            <div className="footerRights">
                <p>© 2025 Rustic Retreat. Все права защищены.</p>
            </div>
            
            <div className="footerLinks">
                <div className="footerNav">
                    <a onClick={() => navigate(ROUTES.ABOUT)}>О нас</a>
                    <a onClick={() => navigate(ROUTES.PRODUCTS)}>Продукция</a>
                    <a>Политика конфиденциальности</a>
                    <a>Условия использования</a>
                    <a>Поддержка</a>
                </div>

                <div className="footerDivider"></div>

                <div className="footerSocials">
                    <a><VkIcon className="footerIcon"/></a>
                    <a><TelegramIcon className="footerIcon"/></a>
                    <a><YoutubeIcon className="footerIcon"/></a>
                </div>
            </div>
        </footer>
    )
}