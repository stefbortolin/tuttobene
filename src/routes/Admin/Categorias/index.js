import React, { useState } from 'react'

import Modal from 'react-modal';


import MenuAdmin from "../../../components/MenuAdmin"

import './index.css'


export default function AdminCategorias() {

    const [modalState, setModalState] = useState(0)


    const editarCategoria = () => {
        setModalState(1)
    }


    const guardarCambios = () => {
        setModalState(0)
    }

    return (
        <div>
            <MenuAdmin select="categorias">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className="inputnc">
                        <input type="text" placeholder="Nombre de la categoría"/>
                        <button>Agregar categoria</button>
                    </div>

                    <div className="cat-list">
                        <div className="cat-list-item">
                            <div className="cat-list-item-name">
                                <span><b>Congelados</b> (20 productos)</span>
                            </div>
                            <div className="cat-list-item-opt">
                                <button className="cat-list-item-opt-btne" onClick={() => editarCategoria() }>Editar</button>
                                <button className="cat-list-item-opt-btnr">Eliminar</button>
                            </div>
                        </div>

                       
                    </div>
                </div>
                <Modal
        isOpen={modalState == 1}
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
        <div className='modal-title'>
            <span>Congelados</span>
        </div>
        <div className='modal-input'>
            <input type="text" placeholder="Nombre del producto"/>
        </div>
        <div className='modal-btn'>
            <button onClick={() => guardarCambios()}>Guardar</button>
        </div>
      </Modal>
            </MenuAdmin>
        </div>
    )
}