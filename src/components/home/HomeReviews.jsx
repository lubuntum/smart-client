import { ReactComponent as StarIcon } from "../../res/icons/star_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg";
import reviews from "../../res/reviews.json"

export const HomeReviews = () => {
    return (
        <div className="homeReviewsWrapper">
            <div className="homeReviewName">
                <h2>Отзывы о нас</h2>
            </div>

            <div className="homeReviewContainer">
                {reviews.map((review, index) => (
                <div className="reviewCard" key={`review${index}`}>
                    <div className="reviewText">
                        {review.text}
                    </div>

                    <div className="reviewAuthorWrapper">
                        <div className="reviewAuthor">
                            {review.author}
                        </div>

                        <div className="reviewRating">
                            {[...Array(review.rating)].map((_, index) => (
                                <StarIcon className="svgIcon" key={`rating${index}`}/>
                            ))}
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}