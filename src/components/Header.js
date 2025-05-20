import React from "react";
import "../styles/Header.css"
import { useState } from "react";
import ChevronDown from "../public/chevrons-down.svg";
import ChevronUp from "../public/chevron-up.svg";



export default function Header() {

    const [drop, setDrop] = useState("opacity-0");
    const [show, setShow] = useState(false);

    const menuShow = (e) => {
        if (show) {
            setDrop("opacity-0");

        } else {
            setDrop("opacity-100");
        
        }
        setShow(!show)
    }


    return (
        <>
            <div className="Header-Container">
                <div className="Header-L-Column">
                    <img  className="Header-Logo" src={require("../public/acar_logo_header.png")} alt="Logotipo Acar" />
                </div>
                <nav className="Header-R-Column">
                    <div className="Responsive-Menu" >
                        <a href="#about" className="Header-Text">Quiénes Somos</a>
                        <a href="#servicios" className="Header-Text">Nuestros Servicios</a>
                        <a href="#flotilla" className="Header-Text">Nuestra Flotilla</a>
                        <a href="#beneficios" className="Header-Text">Ventajas</a>
                        <a href="#contacto"className="Header-Text">Contacto</a>
                    </div>
                    <div className="Responsive-Dropdown">
                        <button className="w-full mb-3 mr-1 flex flex-row items-center justify-center" onClick={menuShow}>
                            <span className=" text-lg font-semibold items-center pl-1 pr-1 text-wrap 
    self-center hover:font-bold xl:text-xl 2xl:text-2xl lg:w-1/5">Menú</span> 
                            <img src={show ? ChevronUp : ChevronDown} />
                        </button>
                        <div className={`Drop-Elements-Container transition-opacity duration-600 ease-in-out divide-y ${drop}`}>
                            <a href="#about" className="Header-Text Drop-Text  " onClick={menuShow}>Quiénes Somos</a>
                            <a href="#servicios" className="Header-Text Drop-Text" onClick={menuShow}>Nuestros Servicios</a>
                            <a href="#flotilla" className="Header-Text Drop-Text" onClick={menuShow}>Nuestra Flotilla</a>
                            <a href="#beneficios" className="Header-Text Drop-Text" onClick={menuShow}>¿Por qué Nosotros?</a>
                            <a href="#contacto" className="Header-Text Drop-Text"onClick={menuShow} >Contacto</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}