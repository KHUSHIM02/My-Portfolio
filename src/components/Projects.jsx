import React, { useRef, useState } from 'react';
import styles from './Projects.module.css';
import { motion, useInView } from 'framer-motion';
import upArrow from '../assets/triangleUpArrow.svg'
import downArrow from '../assets/TriangleDownArrow.svg'

const Projects = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const spacing = 130;



    const data = props.projects;
    const leftSlide = data.filter(item => item.id % 2 === 0);

    const rightSlide = data.filter(item => item.id % 2 != 0);

    const initialR = {
        top: `100%`,
        opacity: 0
    }
    const initialL = {
        top: `-100%`,
        opacity:0
    }
    const animate = {
        top: `0`,
        opacity: 1
    }

    const nextSlide = () => {
        if (slideIndex < (data.length / 2 - 1))
            setSlideIndex((prev) => prev + 1);
    }
    const prevSlide = () => {
        if (slideIndex > 0)
            setSlideIndex((prev) => prev - 1);
    }

    return (
        <div className={`${styles.container} flex w-full rounded-3xl`}>
            <motion.div ref={ref} className={`${styles.info}`} initial={{scale:0.5, opacity:0}} animate={isInView ? {scale:1, opacity:1} : {scale:0.5, opacity:0}} transition={{duration:0.5}}>
                ldskja;lfjasdf
                fklsadjflkajdf
                askdjf;lafsdjk
                
            </motion.div>
            <div className={`${styles.slider}`}>
                <div className={`${styles.btn} top-2`} onClick={prevSlide}>
                    <img src={upArrow} alt="Up Button" />
                </div>

                <div className={`${styles.btn} bottom-2`} onClick={nextSlide}>
                    <img src={downArrow} alt="Down Button" />
                </div>

                <motion.div ref={ref} initial={initialL} animate={isInView ? animate : initialL} transition={{ duration: 0.5 }} className={`${styles.slide} ${styles.invert}`}>
                    <section className='flex w-auto h-full justify-center items-center '>
                        {
                            leftSlide.map((item, idx) => {
                                return <motion.div
                                    key={item.id}
                                    className={`${styles.project} ${styles.invert}`}
                                    animate={{ transform: `translateY(${(idx - slideIndex) * spacing}%)` }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className='rotate-180' transition={`none`}>{item.name}</span>
                                </motion.div>
                            })
                        }
                    </section>
                </motion.div>
                <motion.div ref={ref} initial={initialR} animate={isInView ? animate : initialR} transition={{ duration: 0.5 }} className={`${styles.slide}`}>
                    <section className='flex w-auto h-full justify-center items-center '>
                        {
                            rightSlide.map((item, idx) => {
                                return <motion.div
                                    key={item.id}
                                    className={`${styles.project}`}
                                    animate={{ transform: `translateY(${(idx - slideIndex) * spacing}%)` }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {item.name}
                                </motion.div>
                            })
                        }
                    </section>
                </motion.div>
            </div>
        </div>
    )
}


export default Projects;