import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import '../styles/style.css';
import './navbarStyle.css';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {

    const [isServicesSeled, setServicesSeled] = useState(false);
    const [isOurCoreSeled, setOurCoreSeled] = useState(false);
    const [isOurWorkSeled, setOurWorkeSeled] = useState(false);
    const [issubServicesSeled, setsubServicesSeled] = useState(false);
    const [issubOurCoreSeled, setsubOurCoreSeled] = useState(false);
    const [issubOurWorkSeled, setsubOurWorkeSeled] = useState(false);


    const [isScrolled, setIsScrolled] = useState(false);
    
    const handleScroll = () => {
        if (window.scrollY > 50) { 
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        

        <>
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
            <img src="https://www.deepblok.io/wp-content/uploads/2021/03/cropped-logo.png"/> 
            
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a onClick={(event) => {
                    event.preventDefault();
                    setServicesSeled(!isServicesSeled);
                    setOurCoreSeled(false);
                    setOurWorkeSeled(false)
                }} href="#">Services</a> 
            { isServicesSeled ? ( <><FaAngleUp /> 
            <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Loyalty Platform Solution</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Gift Card Solution</a></li>
            </ul>
            </>
            ): <FaAngleDown />}
            </li>  
            <li><a onClick={(event) => {
                    event.preventDefault();
                    setServicesSeled(false);
                    setOurCoreSeled(!isOurCoreSeled);
                    setOurWorkeSeled(false)
                }} href="#">Our Core Drivers</a> 
            { isOurCoreSeled ? ( <><FaAngleUp /> 
            <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Driven Marketing</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Security</a></li>
                <li  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Privacy</a></li>
            </ul>
            </>
            ): <FaAngleDown />}
            </li>  
            <li><a onClick={(event) => {
                    event.preventDefault();
                    setServicesSeled(false);
                    setOurCoreSeled(false);
                    setOurWorkeSeled(!isOurWorkSeled);
                }} href="#">Our work</a> 
            { isOurWorkSeled ? ( <><FaAngleUp /> 
            <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Restaurant</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Banking</a></li>
                <li  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Retailer</a></li>
            </ul>
            </>
            ): <FaAngleDown />}
            </li>  
            <li><a href="#">About us</a></li>
        </ul>
        <button>Contact Me</button>
        <button id="menuButton" >
            <i className='bx bx-menu' onClick={(event) => {
                    event.preventDefault();
                    setOurCoreSeled(!isOurCoreSeled);
                }}></i>
            { isOurCoreSeled ? ( <>
            <ul className="sub-menu">
                
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    setsubServicesSeled(!issubServicesSeled);
                    setsubOurCoreSeled(false);
                    setsubOurWorkeSeled(false);
                }} className="hfe-sub-menu-item hfe-sub-menu-item-active">
                    Services {issubServicesSeled ? <FaAngleUp /> : <FaAngleDown />}
                </a>
                {issubServicesSeled && (
                    <>
                        <ul className="sub-sub-menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Loyalty Platform Solution</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                            <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Gift Card Solution</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Privacy</a>
                        </li>
                    </ul>
                    
                    </>
                )}
                </li>


                
                
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                <a href="#" onClick={(event) => {
                     event.preventDefault();
                     setsubServicesSeled(false);
                     setsubOurCoreSeled(!issubOurCoreSeled);
                     setsubOurWorkeSeled(false)
                }} className="hfe-sub-menu-item hfe-sub-menu-item-active">
                    Our Core Drivers {issubOurCoreSeled ? <FaAngleUp /> : <FaAngleDown />} </a>
                {issubOurCoreSeled && (
                    <ul className="sub-sub-menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Driven Marketing</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                            <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Security</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Data Privacy</a>
                        </li>
                    </ul>
                )}
                </li>
                

                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    setsubServicesSeled(false);
                    setsubOurCoreSeled(false);
                    setsubOurWorkeSeled(!issubOurWorkSeled);
                }} className="hfe-sub-menu-item hfe-sub-menu-item-active">
                    Our work {issubOurWorkSeled? <FaAngleUp /> : <FaAngleDown />}
                </a>
                {issubOurWorkSeled && (
                    <>
                        <ul className="sub-sub-menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Restaurant</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                            <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Banking</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu">
                        <a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Retailer</a>
                        </li>
                    </ul>
                
                    </>
                )}
                </li>

                <li  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">About us</a></li>
                <li  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item hfe-creative-menu"><a href="#" className="hfe-sub-menu-item hfe-sub-menu-item-active">Contact Me</a></li>
            </ul>
            </>
            ): <></>}
        </button>
    </nav>
    <Outlet />
        </>
    )
}
export default Navbar;