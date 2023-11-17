import React, { useRef, useState } from 'react';
import style from './ImageSlider.module.css';
import { motion, useInView } from 'framer-motion';
import left from '../assets/leftDouble.svg';
import right from '../assets/rightDouble.svg';
// import img from '../assets/personalityImg.jpeg'



const ImageSlider = (props) => {


    const [current, setCurrent] = useState(0);
    const slides = props.slides;
    const length = slides.length;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <motion.section ref={ref} initial={{ top: `100%`, scale: 0 }} animate={isInView ? { top: 0, scale: 1 } : { top: `100%`, scale: 0 }} transition={{ duration: 0.8 }} className={`${style.slider}`} >
            <div className={`${style.btn} ${style.leftArrow}`} onClick={prevSlide} > <img src={left} alt="" /> </div>
            <div className={`${style.btn} ${style.rightArrow}`} onClick={nextSlide}> <img src={right} alt="" /> </div>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? `${style.slide} ${style.active}` : `${style.slide}`}
                        key={index}
                    >
                        <div className="flex w-full h-[70vh] p-8 flex-col -translate-x-1/4 justify-between items-center bg-slate-800"  >
                            <div className="flex absolute top-0 w-full h-full" style={{
                                backgroundImage: `url(${slide.link})`,
                                opacity: `25%`,
                                backgroundPosition: `center`,
                                backgroundRepeat: `no-repeat`,
                                backgroundAttachment: `fixed`,
                                backgroundSize: `cover` 
                        }}></div>
                        <div className="flex relative w-full sm:text-5xl text-lg font-bold text-center justify-center align-center">
                            {slide.name}
                        </div>
                        <div className="flex relative w-full p-1 sm:p-0 sm:w-[60%] text-sm sm:text-xl justify-center ">
                            {slide.desc}
                        </div>
                        <div className="flex relative w-[80%] text-sm sm:text-xl justify-center gap-8">
                            {slide.languages}
                        </div>
                    </div>
                    </div>
    );
})}
        </motion.section >
    );
};

export default ImageSlider;