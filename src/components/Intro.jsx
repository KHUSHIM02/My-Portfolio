import React, { useEffect, useRef } from 'react';
import styles from './Intro.module.css';
import Typed from 'typed.js';
import { easeInOut, motion } from 'framer-motion';

const Intro = (props) => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: props.rotateList,
            typeSpeed: 100,
            backSpeed: 65,
            backDelay: 1000,
            loop: true,
            startDelay: 2500
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className={`${styles.align} flex relative w-full h-screen left-1/2 -translate-x-1/2 sm:w-1/2`}>
                <motion.div className='flex flex-col relative gap-3' initial={{ top: '-100%' }} animate={{ top: 0 }} transition={{ duration: 1.5, delay: 1.5, timingFunction: easeInOut }}>
                    <div className="flex relative text-xl w-full ">Hi, I am </div> <span className='flex relative text-7xl '>{props.name}</span>
                    <div className='inline-block relative text-2xl top-3'>
                        <span ref={el} />
                    </div>
                </motion.div>
                <motion.div className='relative flex flex-col gap-8' initial={{ top: '100%' }} animate={{ top: 0 }} transition={{ duration: 1.5, delay: 1.5, timingFunction: easeInOut }}>
                    <div className={`${styles.info} relative w-2/3`}>
                        {props.info}
                    </div>
                    <button className={styles.btn}><a href={`${props.link}`}>{props.buttonTag}</a></button>
                </motion.div>
            </div>
        </div>
    )
}

Intro.defaultProps = {
    name: " Name Here ",
    info: `Expert in ML/AI research for scalable human welfare solutions.`,
    buttonTag: "Button tag here",
    rotateList: ["Something", "Other thing", "Another thing"]
};


export default Intro;