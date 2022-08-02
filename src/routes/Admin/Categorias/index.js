import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';


import MenuAdmin from "../../../components/MenuAdmin"

import './index.css'


export default function AdminCategorias() {

    const [modalState, setModalState] = useState(0)

    const [getCategorias, setCategorias] = useState(null)

    const [getIndexEditar, setIndexEditar] = useState(-1)


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

    const editarCategoria = (index) => {
        setIndexEditar(index)
        console.log(getCategorias[index])
    }


    const guardarCambios = () => {
        const nuevoNombre = document.getElementById("categoriaName").value
        getCategorias[getIndexEditar].nombre = nuevoNombre
        alert("nashe")
        setModalState(0)
    }

    const cancelarCambios = () => {
        setModalState(0)
    }


    return (
        <div>
            <MenuAdmin select="categorias">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className="inputnc">
                        <input type="text" placeholder="Nombre de la categoría"/>
                        <button >Agregar categoria</button>
                    </div>

                    <div className="cat-list">
                        {
                            getCategorias !=null && getCategorias.map((value,index) => {
                                return (
                                <div className="cat-list-item" key={index}>
                            <div className="cat-list-item-name">
                                <span><b>{value.nombre}</b></span>
                            </div>
                            <div className="cat-list-item-opt">
                                <button className="cat-list-item-opt-btne" onClick={() => editarCategoria(index) }>Editar</button>
                                <button className="cat-list-item-opt-btnr">Eliminar</button>
                            </div>
                            </div>)
                            })
                        }

                    </div>
                </div>
                <Modal
        isOpen={getIndexEditar != -1}
        onRequestClose={() => setModalState(0)}
        style={{
            overlay: {
                zIndex:1000,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'rgba(0, 0, 0, 0.50)',
                padding:0,
                right:0
            }
        }}
        className="modal"
        preventScroll={true}
        contentLabel="Example Modal"
      >
        {getIndexEditar != -1 && 
        <div>
            <div className='modal-title'>
                <span>{getCategorias[getIndexEditar]?.nombre}</span>
            </div>
            <div className='modal-input'>
                <input type="text" id="categoriaName" value={getCategorias[getIndexEditar]?.nombre}  onChange={(event) => {
                    const cat = getCategorias
                    cat[getIndexEditar].nombre = event.target.value
                    setCategorias([...cat])
                }} placeholder="Nombre de Categoria"/>
            </div>
            <div className='modal-btn'>
                <button onClick={() => guardarCambios()}>Guardar</button>
                <button onClick={() => cancelarCambios()}>Cancelar</button>
            </div>
        </div>
        } 
        </Modal>
            </MenuAdmin>
        </div>
    )
}