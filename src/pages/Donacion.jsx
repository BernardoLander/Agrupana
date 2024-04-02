import React, { useState } from "react";
import ReactDOM from "react-dom"
import styles from './Donacion.module.css'

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Donacion = () => {
    const [monto, setMonto] = useState(0)
    const [opcion , setOpcion] = useState()
    const createOrder = (monto, actions) => {
        return actions.order.create({ 
        purchase_units:[
        {
            description:'aporte',
            amount: {
                value: '10'
            }
        }]
        })
    }
    const onApprove= async (data,actions) =>{
        const order = await actions.order.capture()
        console.log('order', order)
    }
    const handleChange = (e) => {
        setMonto(e.target.value)
    }
    const handleCambio = (e)=> {
        setOpcion(e.target.value)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Donacion</h1>
            <input className={styles.inputField} type="text" placeholder="Con cuanto desea contribuir" value={monto} onChange={handleChange}/>
            <select className={styles.selectField} value={opcion} onChange={handleCambio}>
                <option value="1">1$</option>
                <option value="5">5$</option>
                <option value="10">10$</option>
                <option value="20">20$</option>
            </select>
            <PayPalButton
                createOrder={(data,actions ) => createOrder(monto, actions)}
                onApprove={(data,actions) => onApprove(data, actions)}
            />
        </div>
    );
}

export default Donacion