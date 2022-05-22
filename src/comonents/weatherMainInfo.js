import styles from './weatherMainInfo.module.css'

export default function WeatherMainInfo({weather}){
    return(
        <div className={styles.mainInfo}>
            <div className={styles.city} >{weather?.location.name}</div>
            <div className={styles.country}> {weather?.location.country}</div>
            <div className={styles.row}>
                <div className={styles.solTemp} >

                    {/* DIBUJO DEL ESTADO DEL TIEMPO */}
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
                    title="Mapa"
                    // src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7101.913233479575!2d-0.12718020836564314!3d51.49883732604129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653184140404!5m2!1ses!2sar" 
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7101.913233479575!2d${weather?.location.lon}314!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653184140404!5m2!1ses!2sar`} 
                    width="100%" 
                    height="450" 
                    style= {{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    )
}