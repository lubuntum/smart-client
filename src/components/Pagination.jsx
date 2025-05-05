import "../styles/pagination.css"

import { ReactComponent as LeftArrowIcon } from "../res/icons/arrow_back_28dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as RightArrowIcon } from "../res/icons/arrow_forward_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

export const Pagination = () => {
    return (
        <div className="paginationContainer">
            <div className="paginationWrapper">
                <div className="paginationLeft">
                    <button className="link"><LeftArrowIcon className="svgIcon"/></button>
                </div>

                <div className="paginationPages">
                    <button className="link">1</button>
                    <button className="link">2</button>
                    <button className="link">3</button>
                    <button className="link">4</button>
                </div>

                <div className="paginationRight">
                    <button className="link"><RightArrowIcon className="svgIcon"/></button>
                </div>
            </div>

            <div className="paginationCategory">
                <div className="categoryLeft">
                    <button className="transparent"><LeftArrowIcon className="svgIcon"/>КАТЕГОРИЯ</button>
                </div>

                <div className="categoryRight">
                    <button className="transparent">КАТЕГОРИЯ<RightArrowIcon className="svgIcon"/></button>
                </div>
            </div>
        </div>

    )
}