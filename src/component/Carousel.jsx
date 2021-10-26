import React, { useEffect, useState } from 'react'
import './Style.css'


const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex === children.length-5 ? 0 : currentIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, children.length]);

    useEffect(() => {
        setLength(children.length)
    }, [children]);

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    };

    return (
        <div className="carousel_container">
            <div className="carousel_wrapper">


                <div className="carousel_arrow">
                    {
                        currentIndex > 0 &&
                        <button onClick={prev} className="left_arrow">
                            &lt;
                        </button>
                    }

                    {
                        currentIndex < (length - show) &&
                        <button onClick={next} className="right_arrow">
                            &gt;
                        </button>

                    }
                </div>


                <div className="carousel_content_wrapper">
                    <div
                        className={`carousel_content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}vw)` }}
                    >
                        {children}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Carousel
