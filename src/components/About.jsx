import React, { useRef } from 'react';
import styles from './About.module.css';
import { motion, useInView } from 'framer-motion';

export default function About(props) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});    

    return (
        <motion.div ref={ref} initial={{opacity:0, top:`100%`}} animate={isInView ? {opacity:1, top:0} : {opacity:0, top:`100%`}} transition={{duration:0.8}} className='flex relative w-full sm:left-1/2 sm:-translate-x-1/2 sm:p-8'>
            <div className={`${styles.infoBox} flex flex-col w-full sm:flex-row`} >
                <div className={`${styles.displayPic}`}>
                    <div className={`${styles.item} flex`}>
                        <img src={props.img} alt="Profile Pic" />
                    </div>
                </div>
                <div className={`${styles.info} flex flex-col gap-6 w-full sm:w-3/5`}>
                    <span>{props.info1}</span>
                    <span>{props.info2}</span>
                    <span>{props.info3}</span>
                </div>
            </div>
        </motion.div>
    )
}

