import { useState } from "react";

import styles from './weatherForm.module.css';

export default function WeatherForm({onChangeCity}){

    const[city, setCity]=useState(''); //HOOK aca defino el estado de mi input


    // cada vez que actualizamos el estado ejecutamos la funcion onCHange
    function onChange(e){
        const value=e.target.value;

        //si NO encuentra el stado no hace ningun cambio
        if(value !== ''){
            setCity(value);
        }
    }

    // aca si doy ENTER al imput, se actualiza mi "weatherForm"
    // cada vez que cambio de ciudad me actualiza el form
    function handleSumbit(e){
        e.preventDefault();
        onChangeCity(city);
    }

    // ACA INGRESA MI INPUT - LUGAR A BUSCAR
    return(
        <form onSubmit={handleSumbit} className={styles.container} >
           <input type='text' onChange={onChange} className={styles.input} />  {/*  aca cada ves que actualizamos el formulario */}
        </form>
    )
}