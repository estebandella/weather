import { useState } from "react";

import styles from './weatherForm.module.css';

export default function WeatherForm({onChangeCity}){

    const[city, setCity]=useState('');

    function onChange(e){
        const value=e.target.value;

        //si nue encuentra el stado no hace ningun cambio
        if(value !== ''){
            setCity(value);
        }
    }


    function handleSumbit(e){
        e.preventDefault();
        onChangeCity(city);
    }

    return(
        <form onSubmit={handleSumbit} className={styles.container} >
            <input type='text' onChange={onChange} className={styles.input} />
        </form>
    )
}