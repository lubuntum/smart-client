import "../../styles/footer.css"

import { ReactComponent as VkIcon } from "../../res/icons/1646921_vk_vkontakte_icon.svg"
import { ReactComponent as ClassIcon } from "../../res/icons/1646924_odnoklassniki_icon.svg"
import { ReactComponent as YoutubeIcon } from "../../res/icons/2559760_media_social_video_youtube_icon.svg"

export const FooterComponent = () => {
    return (
        <div className="footerWrapper">
            <div className="footerContent">
                <div className="footerNav">
                    <a>Главная</a>
                    <a>О компании</a>
                    <a>Новости</a>
                    <a>Акции</a>
                </div>

                <div className="divider"></div>

                <div className="footerInfo">
                    <div className="footerMailing">
                        <p>Подпишитесь на рассылку выгодных предложений</p>
                        <div className="footerInput">
                            <input placeholder="email *" required></input>
                            <button className="default">Подписаться</button>
                        </div>
                    </div>

                    <div className="footerSocials">
                        <p>Мы в соц. сетях</p>
                        <div className="socialsContainer">
                            <div className="socialItem">
                                <VkIcon className="svgIcon"/>
                            </div>
                            <div className="socialItem">
                                <ClassIcon className="svgIcon"/>
                            </div>
                            <div className="socialItem">
                                <YoutubeIcon className="svgIcon"/>
                            </div>
                        </div>
                    </div>

                    <div className="footerContacts">
                        <p>Наши контакты</p>
                        <div className="contactsPhone">
                            <p>+7 (800) 555-35-35</p>
                            <p>8 (000) 000-00-00</p>
                        </div>
                        <div className="contactsLocale">
                            г. Абакан, ул. Пушкина, <br/> д. Колотушкина 67
                        </div>
                        <div className="contactsWorkTime">
                            <p>Режим работы:</p>
                            <p>Без выходных с 09:00-22:00</p>
                        </div>
                        <div className="contactsEmail">
                            smart@gmail.com
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="footerCred">
                    <p>© 2025 Абакан</p>
                </div>
            </div>
        </div>
    )
}