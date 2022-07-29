import React, { } from 'react'

import MenuAdmin from "../../../components/MenuAdmin"


import './index.css'

export default function AdminAgregarProducto() {


    return (
        <div>
            <MenuAdmin select="agregarproducto">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div style={{width:'30%'}}>

                        <div className='input'>
                            <input type="text" required onKeyUp={ (e) => e.target.setAttribute('value', e.target.value) }/>
                            <label>Nombre del producto</label>
                        </div>

                        <div className='input'>
                            <input type="text" required onKeyUp={ (e) => e.target.setAttribute('value', e.target.value) }/>
                            <label>Precio del producto</label>
                        </div>
                    </div>
                </div>
            </MenuAdmin>
        </div>
    )
}