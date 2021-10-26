
import React from "react";
import "./Style.css";
import Carousel from "./Carousel";

import pic1 from "../assets/pic-1.webp"
import pic2 from "../assets/pic-2.webp"
import pic3 from "../assets/pic-3.webp"
import pic4 from "../assets/pic-4.webp"
import pic5 from "../assets/pic-5.webp"
import pic6 from "../assets/pic-6.webp"
import pic7 from "../assets/pic-7.webp"
import pic8 from "../assets/pic-8.webp"
import pic9 from "../assets/pic-9.webp"
import pic10 from "../assets/pic-10.webp"


const CarouselContent = () => {
    return (
        <div className="carousel_section">

            <Carousel  show={5} >

                <div  className='slider_section'>

                    <img src={ pic1 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 1 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic2 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 2 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic3 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 3 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic4 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 4 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic5 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 5 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic6 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 6 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic7 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 7 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic8 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 8 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic9 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 9 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>
                <div  className='slider_section'>

                    <img src={ pic10 } alt="pic" className="slider_pic" />

                    <div className="slider_content">

                        <div className="slider_text">

                            <h2 className="slider_h2"> Slide - 10 </h2>
                            <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing. </h3>

                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> Click Me </h2>
                        </button>

                    </div>
                </div>

            </Carousel>
        </div>

    );
}

export default CarouselContent;
