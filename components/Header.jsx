import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleSwitch from './ToggleSwich';

const Header = () => {
    const [open, setOpen] = useState(false);

    const [background, setBackground] = useState(false)


    const route = useRouter()
    const { slug } = route.query

    const handleClick = () => {
        setOpen(prev => !prev)
    }



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setBackground(true)
            } else {
                setBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [background])

    return (<>
        {open && <div className={open ? "overlay" : "overlay"} onClick={handleClick}></div>}
        <header className={background ? "background header" : "header"}>
            <div className="container">
                <nav className="nav">
                    <Link href='/' legacyBehavior>
                        <a className="logo">e-okp.</a>
                    </Link>
                    <div className={open ? "nav__menu active" : "nav__menu in-active"}>
                        <ul className="nav__list">
                            <li className='nav__item'>
                                <Link href='/'  legacyBehavior scroll={false}>
                                    <a className={route.asPath === '/' ? "active" : ''} onClick={() => handleClick()}>Home</a>
                                </Link>
                            </li>
                            <li className='nav__item'>
                                <Link href='/about' legacyBehavior scroll={false}>
                                    <a className={route.asPath === '/about' ? "active" : ''} onClick={() => handleClick()}>About</a>
                                </Link>
                            </li>
                            <li className='nav__item'>
                                <Link href='/works' legacyBehavior scroll={false}>
                                    <a className={route.asPath === '/works' || route.asPath === `/works/${slug}` ? "active" : ''} onClick={() => handleClick()}>Work</a>
                                </Link>
                            </li>
                            <li className='nav__item'>
                                <Link href='/contact' legacyBehavior scroll={false}>
                                    <a className={route.asPath === '/contact' ? "active" : ''} onClick={() => handleClick()}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <ToggleSwitch />
                        <ul className="nav_socials">
                            <li className="nav__socials__item">
                                <a href="http://www.twitter.com/emmanuel_okp" rel="noreferrer" target='_blank'>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav__socials__item">
                                <a href="http://www.github.com/okp980" rel="noreferrer" target='_blank'>
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={handleClick}>
                        {open ? <i className="fas fa-times" ></i> : <i className="fas fa-bars"></i>}
                    </div>
                </nav>

            </div>
        </header>
    </>
    )
}

export default Header
