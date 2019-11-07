import './ShrinkNavbar.scss';
import { useEffect, useState } from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });

        let logo = document.getElementById("logo");
        let navbarRight = document.getElementById("navbar-right");
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById("navbar").style.padding = "30px 10px";
            logo.style.fontSize = "25px";
            logo.style.opacity = "1";
            navbarRight.style.opacity = "1";
        }else{
            document.getElementById("navbar").style.padding = "80px 10px";
            logo.style.fontSize = "35px";
            logo.style.opacity = "0";
            navbarRight.style.opacity = "0";
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return state;
}

const ShrinkNavbar = () => {
    const { x, y } = useScroll();

    const responsiveNav = (e) => {
        let x = document.getElementById('navbar-right');
        if (x.className === 'nav'){
            x.className += ' responsive';
        }else{
            x.className = 'nav';
        }
    }

    return (
        <>
            <div id="navbar">
                <a href="#default" id="logo">
                Dev-Jitsu
                </a>
                <div className="nav" id="navbar-right">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#icon" className="icon" onClick={responsiveNav}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ShrinkNavbar;