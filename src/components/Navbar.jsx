import React, { useState, useRef } from "react";
import nbar from "./Navbar.module.css";
import { easeIn, motion, useInView } from "framer-motion";
import Hamburger from "./Hamburger";

export default function Navbar(props) {

    const [hambergur, setHambergur] = useState(false);
    const [active, setActive] = useState(``);
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    const navVariants = {
        initial: { y: -100 },
        animate: { y: 0 },
    }

    const items = [
        { title: `${props.item1}`, id: 1, link: `${props.link1}` },
        { title: `${props.item2}`, id: 2, link: `${props.link2}` },
        { title: `${props.item3}`, id: 3, link: `${props.link3}` },
        { title: `${props.item4}`, id: 4, link: `${props.link4}` },
        { title: `${props.item5}`, id: 5, link: `${props.link5}` },
        { title: `${props.item6}`, id: 6, link: `${props.link6}` },
        { title: `${props.item7}`, id: 7, link: `${props.link7}` }
    ];
    const itemList = items.map(item => {
        if (item.title != "")
            return (<motion.li
                ref={ref}
                variants={navVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, timingFunction: easeIn, delay: 0.1 * item.id }}
                key={item.id}
                className={nbar.navEle}>
                <a href={item.link}>{item.title}</a>
            </motion.li>)
    });

    const menuToggle = () => {
        if (hambergur === false) {
            setHambergur(!hambergur);
            setActive(`${nbar.active}`);
        }
        else if (hambergur) {
            setHambergur(!hambergur);
            setActive(``);
        }
    }

    return (
        <>
            <nav className={`${nbar.navbar}`}>
                <div className={nbar.navHead}>PORTFOLIO</div>
                <div className={`${nbar.hamburger} , ${active}`} onClick={menuToggle}>
                    <div className="flex relative -top-4">
                        <Hamburger />
                    </div>
                </div>
                <ul className={`${nbar.navMenu} ${active}`}>
                    {itemList}
                </ul>
            </nav>
        </>
    );
}

Navbar.defaultProps = {
    item1: "1st element",
    item2: "2nd element",
    item3: "3rd element",
    item4: "",
    item5: "",
    item6: "",
    item7: ""
};
