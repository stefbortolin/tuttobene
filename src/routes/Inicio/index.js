
import axios from 'axios'
import React, { useEffect } from 'react'


export default function Inicio() {

    

    useEffect(() => {
        console.log("ADSA")
        axios({
            url:`http://localhost/index.php`,
            method:'POST',
            data: {
                action: 'agregarproducto'
            }
        }).then(res => {
            const data = res.data;
            console.log(data)
        })
    }, [])
    return (
        <div>
                TuttoBene
        </div>
    )
}