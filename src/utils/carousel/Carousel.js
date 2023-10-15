import { useState } from 'react';
import './carousel.css';

export function Carousel({ slides }) {

    let [currentSlide, setCurrentSlide] = useState(0);
    let slideFigs = [];

    slides.forEach((slide, i) => {
        slideFigs.push(
            <figure 
                style={{ transform: `translateX(${(i - currentSlide) * 100}%)`}}
            >
                <img src={slide.src} alt={slide.alt}/>
                <figcaption>{slide.caption}</figcaption>
            </figure>
        )
    })

    function prevSlide() {

        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(slides.length - 1)
        }

    }

    function nextSlide() {
    
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        } else {
            setCurrentSlide(0)
        }

    }




    return (
        <div class="specs-slideshow">
                    <div class="specs-slideshow-content">
                        <div class="slider">
                            {slideFigs}
                        </div>
                        <div class="arrow-btns">
                            <button class="prev" onClick={prevSlide}>
                                <img src="assets/arrow-down-sign-to-navigate.png" alt="previous image" />
                            </button>
                            <button class="next" onClick={nextSlide}>
                                <img src="assets/arrow-down-sign-to-navigate.png" alt="next image" />
                            </button>
                        </div>
                    </div>
                </div>
    )
}