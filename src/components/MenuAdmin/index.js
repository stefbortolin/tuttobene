import React, { useState } from 'react'

import './index.css'


import IconInicio from '../../imgs/home.svg'
import IconAgregarP from '../../imgs/agregarproducto.svg'
import IconMenu from '../../imgs/menu.svg'
import IconNotif from '../../imgs/notificacion.svg'
import IconCategoria from '../../imgs/categoria.svg'
import IconComprasP from '../../imgs/compraspendientes.svg'
import IconComprasR from '../../imgs/comprasrealizadas.svg'
import IconBuscarP from '../../imgs/lupa.svg'
import IconRegistrados from '../../imgs/usuario.svg'
import IconEstadis from '../../imgs/estadisticas.svg'
import IconActividad from '../../imgs/ojo.svg'
import IconoFlechaA from '../../imgs/flechaabajo.svg'


export default function MenuAdmin(props) {

    const { select } = props;

    const [isMenuEnable, setMenuEnable] = useState(false)

    function changeTalle(value) {
        if(value === "0") {
            document.getElementById("agtalle").style.display = "block"
            document.getElementById("tallecolores").style.display = "none"
        } else {
            document.getElementById("agtalle").style.display = "none"
            document.getElementById("tallecolores").style.display = "flex"
        }
    }
    
    function agregarTalle() {
        const value = document.getElementById("tallea")
        const select = document.getElementById("talleselect")
        if(value) {
            select.innerHTML += `<option value="${value.value}">${value.value}</option>`
            select.value = value.value
            value.value = ""
            changeTalle(value.value)
        }
    
    }


    const redirect = (url) => {
        window.location.href = url
    }

    return (
    <div className="menu">
        <div className="menucontent">
            <div className={`submenu ${isMenuEnable == true && "menudisable"}`}>
                <div className="menuback" onClick={() => setMenuEnable(!isMenuEnable)}></div>
                <div className="submenucontent">
                    <div className="submenulogo">
                        <div style={{fontSize:"26px",color:"#fff"}}>Tutto Bene</div>
                    </div>
                    <div style={{padding:"10px"}}>
                        <div className="menu-userinfo">
                            <div className="menu-usericon"></div>
                            <div className="menu-username">Felipe Blanco</div>
                        </div>
                        <div className="separacion"></div>
                        <div className="">
                            <div className={`submenuitem ${select == "inicio" ? " itemselect" : ""}`} onClick={() => { redirect('/admin/') } }><img src={IconInicio}/> Inicio</div>
                            <div className={`submenuitem ${select == "agregarproducto" ? " itemselect" : ""}`} onClick={() => { redirect('/admin/agregarproducto') }}><img src={IconAgregarP} width="30px"/> Agregar producto</div>
                            <div className={`submenuitem ${select == "categorias" ? " itemselect" : ""}`} onClick={() => { redirect('/admin/categorias') }}><img src={IconCategoria} width="30px"/>Categorias</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconComprasP} width="30px"/>Compras pendientes</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconComprasR} width="30px"/>Compras realizadas</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconBuscarP} width="30px"/>Buscar producto</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconRegistrados} width="30px"/>Registrados</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconEstadis} width="30px"/>Estadísticas</div>
                            <div className={`submenuitem ${select == "a" ? " itemselect" : ""}`}><img src={IconActividad} width="30px"/>Actividad</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuchildren">
                <div className="menutop">
                    <div style={{flex:1}}>
                        <div style={{cursor:"pointer"}} onClick={() => setMenuEnable(!isMenuEnable) }>
                            <img src={IconMenu} style={{fill:"#fff"}} width="25px" height="25px"/>
                        </div>
                    </div>
                    <div className="useroption">
                        <div><img src={IconNotif}/></div>
                        <div className="useroption_name">Felipe Blanco</div>
                        <div style={{cursor:"pointer"}}><img src={IconoFlechaA}/></div>
                    </div>
                </div>

                <div className="menucontentainer">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    )
}