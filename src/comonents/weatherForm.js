import { useState } from "react";
  

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
        <form onSubmit={handleSumbit}>
            <input type='text' onChange={onChange} />
        </form>
    )
}