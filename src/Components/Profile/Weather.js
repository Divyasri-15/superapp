import { useEffect, useState } from "react";
import './Weather.css';
import humidity from '../../Assets/humidity.png';
import wind from '../../Assets/wind.png';
import pressure from '../../Assets/pressure.png';

function Weather(){
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false);

    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch("http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no")
                .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])

    useEffect(()=>{
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var am_pm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = (minutes < 10) ? '0'+minutes : minutes;
        hours = (hours < 10) ? '0'+hours : hours;
        var Time = hours + ':' + minutes + ' ' + am_pm;
        setTime(Time);
    },[])

    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const TodayDate = dd + '-' + mm + '-' + yyyy;
        setDate(TodayDate);
    },[])

    return(
        <div className="Weather">
            <div className="Weather-date">
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div>
                {weather ?
                    <div className="Weather-data"> 
                        <div style={{marginTop:"-3%"}}>
                            <img src={weather.current.condition.icon} alt="weather condition"/>
                            <p style={{marginTop:"-7%"}}>{weather.current.condition.text}</p>
                        </div>
                        <div className="Weather-vl"></div>
                        <div style={{marginLeft:"8%", marginRight:"-5%"}}>
                            <p style={{fontSize:"2.3rem", fontWeight:"500" ,marginTop:"10%"}}><span>{weather.current.temp_c}</span>&deg;C</p>
                            <p style={{display:"flex",gap:"6%", marginTop:"-15%"}}><img src={pressure}/>{weather.current.pressure_mb} mbar Pressure</p>
                        </div>
                        <div className="Weather-vl"></div>
                        <div style={{marginLeft:"7%"}}>
                            <p style={{display:"flex",gap:"6%", marginTop:"-1%"}}><img src={wind}/> {weather.current.wind_kph} km/h Wind</p>
                            <p style={{display:"flex", gap:"6%",marginTop:"3%"}}><img src={humidity}/> {weather.current.humidity}% Humidity</p>
                        </div>
                    </div> : <></>
                }
            </div>
        </div>
    );

}

export default Weather;