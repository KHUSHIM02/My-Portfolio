import React, { useRef } from 'react';
import Progressbar from './Progressbar';
import { useInView, motion } from 'framer-motion';


const Skills = (props) => {

    const skillList = props.list;
    const bgcolor = props.bgcolor;
    const color = props.color;
    const height = props.height;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    const skills = skillList.map((skills) => {
        return (
            <li key={skills.id} >
                <Progressbar label={skills.name} bgcolor={bgcolor} progress={skills.progress} height={height} barcolor={color} />
            </li>
        )
    });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, top: `100%` }}
            animate={isInView ? { opacity: 1, top: 0 } : { opacity: 0, top: `100%` }}
            transition={{ duration: 0.8 }}
            className='flex flex-col relative w-full sm:p-8 left-1/2 -translate-x-1/2'
        >
            <div className={`flex text-xl p-4 font-bold`}>
                {props.heading}
            </div>
            {skills}
        </motion.div>
    )
}

Skills.defaultProps = {
    bgcolor: '',
    color: ''
}

export default Skills;