import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



export const Carrousel = ({ location }) => {
    const album = location.pictures
    const [slide, setSlide] = useState(0)
    const previousSlide = () => {
        setSlide(slide === 0 ? album.length - 1 : slide - 1);
    }
    const nextSlide = () => {
        setSlide(slide === album.length - 1 ? 0 : slide + 1);
    }
    return (
        <div className="carrousel">
            {album.map((photo, index) => {
                return (
                    <img
                        src={photo}
                        alt={"photo" + `${index}`}
                        key={"photokey" + `${index}`}
                        className={slide === index ? "slide" : "slide slide-hidden"} />
                )
            })}
            <FontAwesomeIcon onClick={previousSlide} icon={faChevronLeft} className="arrow_left arrow" />
            <FontAwesomeIcon onClick={nextSlide} icon={faChevronRight} className="arrow_right arrow" />
            <span className='indicator'> {slide + 1}/{album.length}</span>
        </div >
    );
};

export default Carrousel