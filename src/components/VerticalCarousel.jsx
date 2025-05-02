import "../styles/carousel.css"

import { useEffect, useRef, useState } from "react"

import { ReactComponent as UpIcon } from "../res/icons/keyboard_arrow_up_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
import { ReactComponent as DownIcon } from "../res/icons/keyboard_arrow_down_28dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"

export const VerticalCarousel = ({ slides, carouselHeigth = 500, scrollTime = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isAnimating, setIsAnimating] = useState(false)
    const carouselRef = useRef(null)
    const intervalRef = useRef(null)

    const totalSlides = [slides[slides.length - 1], ...slides, slides[0]]

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
        resetAutoScroll()
    }

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prevIndex) => prevIndex - 1)
        resetAutoScroll()
    }

    const handleIndicatorClick = (index) => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(index + 1)
        resetAutoScroll()
    }

    const resetAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            handleNext()
        }, scrollTime)
    }

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false)

                if (currentIndex === totalSlides.length - 1) {
                    setCurrentIndex(1)
                } else if (currentIndex === 0) {
                    setCurrentIndex(totalSlides.length - 2)
                }
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, isAnimating, totalSlides.length])

    useEffect(() => {
        resetAutoScroll()

        return () => { 
            clearInterval(intervalRef.current)
        }
    }, [scrollTime])

    return (
        <div className="carouselContainer" style={{ height: `${carouselHeigth}px` }}>
            <div className="carousel" ref={carouselRef} style={{
                transform: `translateY(-${currentIndex * 100}%)`,
                transition: isAnimating ? "transform .5s ease-in-out" : "none"}}>
                
                {totalSlides.map((slide, index) => (
                    <div className="carouselItem" key={`carousel${index}`}>
                        {slide}
                    </div>
                ))}
            </div>

            <div className="carouselButtons">
                <button className="link" onClick={(handlePrev)}><UpIcon className="svgIcon"/></button>

                <div className="carouselIndicators">
                    {slides.map((_, index) => (
                        <div className={`indicator ${index === (currentIndex - 1 + slides.length) % slides.length ? "active" : ""}`} 
                             key={`indicator${index}`}
                             onClick={() => handleIndicatorClick(index)}>
                        </div>    
                    ))}
                </div>

                <button className="link" onClick={(handleNext)}><DownIcon className="svgIcon"/></button>
            </div>
        </div>
    )
}
