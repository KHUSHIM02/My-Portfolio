import React from 'react';
import styles from './Contact.module.css';
import telegram from '../assets/telegram.png';
import email from '../assets/email.png';
import github from '../assets/github.png'
import phone from '../assets/phone.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
    return (
        <div className='flex relative w-full h-[20vh] justify-between items-center'>
            <div className="flex relative w-2/5 h-full justify-center">
                <div className="flex relative w-full justify-center items-center text-4xl font-bold">Khushi Mishra</div>
                <div className="flex absolute w-[45%] h-0.5 top-1/2 left-0 bg-amber-300"></div>
                <div className="flex absolute w-[15%] top-1/2 right-[15%] rotate-90 border border-white"></div>
            </div>
            <div className="flex relative w-3/5 h-full">
                <div className="flex relative h-full w-1/3 items-center gap-4">
                    <img className='flex w-[10%] h-auto' src={email} alt="" />
                    khushimish26@gmail.com
                </div>
                <div className="flex relative h-full items-center gap-4 w-1/3">
                    <img className='flex w-[10%] h-auto' src={phone} alt="" />
                    +91-8860914595
                </div>
                <div className="flex relative h-full w-1/3 items-center gap-4">
                    <img className='flex w-[10%] h-auto' src={github} alt="" />
                    <a href="https://github.com/KHUSHIM02/"  >KHUSHIM02</a>
                </div>
            </div>
        </div>
    )
}


export default Contact;