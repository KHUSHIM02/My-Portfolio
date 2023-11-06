import React from 'react';
import { useRef } from 'react';
import { animate, motion, transform, useInView } from 'framer-motion';

const Progressbar = (props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const progress = `${props.progress}`;
    const bgcolor = `${props.bgcolor}`;
    const barcolor = `${props.barcolor}`;
    const height = `${props.height}`;

    const initial = {
        width:'0%',
        height:'100%',
        backgroundColor: barcolor,
        textAlign: 'right'
    }
    const animate = {
        width: `${progress}%`,
        backgroundColor: barcolor
    }

    const Parentdiv = {
        display: 'flex',
        flexDirection: 'column',
        height: `${height}`,
        width: '80%',
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: `${bgcolor}`
    }

    return (
        <div className='flex flex-col relative w-full gap-1 p-3 items-center'>
            <div className='flex w-4/5 gap-1 text-l justify-between'>
                <span className='flex w-3/4' >{props.label}</span>
                <span className='flex w-1/4 justify-end '>{`${progress}%`}</span>
            </div>
            <div style={Parentdiv}>
                    <motion.div ref={ref} initial={initial} animate={isInView ? animate : initial} transition={{duration:0.5}}></motion.div>
            </div>
        </div>
    )
}

Progressbar.defaultProps = {
    progress: '50',
    label: 'Label',
    barcolor: 'cyan',
    bgcolor: 'black',
    height: '20px'
}

export default Progressbar;