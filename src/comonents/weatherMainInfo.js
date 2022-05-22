import styles from './weatherMainInfo.module.css'

export default function WeatherMainInfo({weather}){
    return(

        
        <div className={styles.mainInfo}>

            {/* ACA VOY A MOSTRAR LOS RESULTADOS DE LA BUSQUEDA */}
            <div className={styles.city} >{weather?.location.name}</div> {/* MUESTRA LA CIUDAD */}
            <div className={styles.country}> {weather?.location.country}</div> {/* MUESTRA EL PAIS COUNTRY */}
            <div className={styles.row}>
                <div className={styles.solTemp} >

                    {/* FIGURA DEL TIEMPO */}
                    <div>
                        <img 
                            src={`http:${weather?.current.condition.icon}`} 
                            width='128' 
                            alt={weather?.current.condition.text}
                        />
                    </div>

                    {/* ESTADO DEL TIEMPO + TEMPERATURA */}
                    <div className={styles.weatherCondition}>
                        <div className={styles.condition}>
                            {weather?.current.condition.text}
                        </div>
                        <div className={styles.current}>
                            {weather?.current.temp_c}°
                        </div>
                    </div>

                </div>

                {/* MAPITA */}
                <iframe 
                    className={styles.mapa}
                    title="Mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39732.431663421!2d${weather?.location.lon}656!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653226766312!5m2!1ses!2sar`}                 
                    width="100%" 
                    height="400" 
                    style= {{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}