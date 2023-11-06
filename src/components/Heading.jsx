import React from 'react';
import styles from './Heading.module.css';

const Heading = (props) => {

    const text = 'hello';
    const text2 = text.split('');
    console.log(text2);

    const heading = text2.map((letters, idx) => {
        if (idx % 2 === 0)
            return (<span className={`${styles.letter}`} > {letters} </span>)
        else
            return (<span className={`${styles.letter} ${rev}`} > {letters} </span>)
    })

    return (
        <div className={`${styles.heading}`}>
            {heading}
        </div>
    )
}

Heading.defaultProps = {
    text: 'Text'
}


export default Heading;
