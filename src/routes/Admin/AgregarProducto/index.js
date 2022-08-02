import React, { useState,useEffect } from 'react'
import axios from 'axios'
import MenuAdmin from "../../../components/MenuAdmin"


import './index.css'

export default function AdminAgregarProducto() {

    const [getProductos, setProductos] = useState(null)

    useEffect(() => {
        axios({
            url: `http://localhost/index.php`,
            method: 'POST',
            data: {
                action:'getproductos'
            }
        }).then(res => {
            const data = res.data;
            setProductos(data)
            console.log(data)
        })
    }, [])

    const agregarProducto = () => {
        const nombreNuevoProducto = document.getElementById("nombreNuevoProducto").value
        const precioNuevoProducto = document.getElementById("precioNuevoProducto").value
        alert("nashe")
    }

    return (
        <div>
            <MenuAdmin select="agregarproducto">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div style={{width:'30%'}}>

                        <div className='input'>
                            <input type="text" required onKeyUp={ (e) => e.target.setAttribute('value', e.target.value) } id="nombreNuevoProducto"/>
                            <label>Nombre del producto</label>
                        </div>

                        <div className='input'>
                            <input type="text" required onKeyUp={ (e) => e.target.setAttribute('value', e.target.value) } id="precioNuevoProducto"/>
                            <label>Precio del producto</label>
                        </div>

                        <buttom className="cat-list-item-opt-btne" onClick={() => agregarProducto()}>AGREGAR</buttom>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">PRECIO</th>
                            <th scope="col">CATEGORIA</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </MenuAdmin>
        </div>
    )
}