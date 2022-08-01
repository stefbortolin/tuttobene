import React, { useEffect, useState } from 'react'
import axios from 'axios'


import MenuAdmin from '../../../components/MenuAdmin'

import './index.css'

export default function AdminInicio() {

    const [getCategorias, setCategorias] = useState(null)

    const [agPCategoria, setAgCategoria] = useState(0)


    useEffect(() => {
        axios({
            url: `http://localhost/index.php`,
            method: 'POST',
            data: {
                action:'getcategorias'
            }
        }).then(res => {
            const data = res.data;
            setCategorias(data)
            console.log(data)
        })
    }, [])




    const agregarCategoria = () => {

        const nombre = document.getElementById('ac-nombre').value
        const subcat = document.getElementById('ac-subcat').value

        if(nombre.length < 2) return alert("Ingresa un nombre valido")
        axios({
            url: `http://localhost/index.php`,
            method: 'POST',
            data: {
                action: 'agregarcategoria',
                nombre: nombre,
                subcat: subcat
            }
        }).then(res => {
            const data = res.data;
            if(data == 1) {
                document.getElementById('ac-nombre').value = ""
                document.getElementById('ac-subcat').value = 0
                alert("Categoria agregada")
            }
        })

        
    }
    return (
        <MenuAdmin select="inicio">
            <div>
                <div>
                    <h1>Agregar productodsdsad</h1>
                    <input id="ap-nombre" placeholder="nombre del producto"/>
                    <input id="ap-precio" placeholder="precio del producto"/>


                    <select id="ap-cat" onChange={(e) => setAgCategoria(e.target.value) }>
                        {
                            getCategorias != null &&
                            getCategorias.map((value, index) => {
                                return (<option key={index} value={index}>{value.nombre}</option>)
                            })
                        }
                    </select>
                    <select>
                        {
                            getCategorias != null &&
                            getCategorias[ agPCategoria ]?.subcategorias?.map((value, index) => {
                                return (<option key={index}>{value.nombre}</option>)
                            })
                        }
                    </select>
                    <button>agregar producto</button>
                </div>
                <div>
                    <h1>Agregar categorias</h1>
                    <input id="ac-nombre" placeholder="Nombre de la categoria"/>
                    <select id="ac-subcat">
                        <option value={0}>-</option>
                        {
                            getCategorias != null &&
                            getCategorias.map((value, index) => {
                                return (<option key={index} value={value.id}>{value.nombre}</option>)
                            })
                        } 
                    </select>
                    <button onClick={() => agregarCategoria() }>Agregar categoria</button>
                </div>
            </div>
        </MenuAdmin>
    )
}