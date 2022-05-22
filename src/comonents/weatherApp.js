import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

import styles from './weatherApp.module.css';
import Loading from './loading';

export default function WeatherApp(){
    const [weather, setWeather]=useState(null); //aca definios un estado para nuestro input

    //useRffect es hook que epera recibir un collbak y un arreglo de independencias
    // cuando se carga nuevo informacion quierio que se ejeecute un codigo
    // cada vez que se atulaia mi estado o se ejecuta un nuevo renderizado 
    useEffect(()=>{
        loadInfo();
    },[]);

    //cada vex que cambia el valor de weather (ENTER o ACTULIZA) se actualiza la localizacion
    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ""}`
    },[weather]);



    // API: TOMA LA INFO DE LA API vamos hacer una solicitud  http para tomar la informaicon de la API
    async function loadInfo(city = 'london'){ //si no viene vacio usa LONDON comp paraametro por defecto
        try {
            //
            const request = await fetch( //creo una variable que es mi solicitud, 

                //aca llamao a mis variables de entrono, mi endpoint, adjuntadno la clave
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`                
                );

                //transformo la informaicon a JSON
                const json = await request.json();

                // aca hatgo qeu se demore la actualizacion de mi estado, simula conexion lenta
                setTimeout(() =>{
                    setWeather(json); //GUARDO LA info de la API
                },2000 );


                console.log(json); //Aca muestro la informacion que saco de la API
        } catch (error) {}
    }
    
    function handleChangeCity(city){
        setWeather(null); // aca guardo cuando cambio de ciudad
        loadInfo(city); //aca llamo al funcion loadInfo y espero una ciudad
    }
    
    return(
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity = {handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading /> }

            {/* <WeatherMainInfo weather={weather} /> */}
        </div>
    );
}