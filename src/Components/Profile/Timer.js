import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'
import up from '../../Assets/up.png'
import down from '../../Assets/down.png'
import './Timer.css';

function Timer()
{
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [playing, setPlaying] = useState(false)
    const increaseSecond = ()=>{
        if(seconds==59){
            return
        }
        setSeconds((sec)=>sec+1);
    }
    const increaseMinute = ()=>{
        if(minutes==59){
            return
        }
        setMinutes((min)=>min+1)
    }
    const increaseHour = ()=>{
        setHours((hours)=>hours+1)
    }
    const decreaseSecond = ()=>{
        if(seconds==0){
            return
        }
        setSeconds((sec)=>sec-1)
    }
    const decreaseMinute = ()=>{
        if(minutes==0){
            return
        }
        setMinutes((min)=>min-1)
    }
    const decreaseHour = ()=>{
        if(hours==0){
            return
        }
        setHours((hr)=>hr-1)
    }

    const start="Start";
    const pause="Pause";

    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const sec = totalSeconds % 60;
        const hr = Math.floor(totalMinutes / 60);
        const min = totalMinutes % 60;
        return `${hr<10? '0'+hr : hr}:${min<10? '0'+min : min}:${sec<10? '0'+sec : sec}`;
    }
    return (
        <div className="Timer">
            <div className="Timer-left">
                <CountdownCircleTimer isPlaying={playing} duration={seconds+minutes*60+hours*60*60} colors={["#FF6A6A"]}>
                    {({ remainingTime }) =><span style={{color:"white",fontSize:"1.8rem",fontWeight:"600",letterSpacing:"0.04em"}}>{toHoursAndMinutes(remainingTime)}</span>}
                </CountdownCircleTimer>
            </div>
            <div style={{width:"30vw", textAlign:"center"}}>
                <div className="Timer-right"> 
                    <div>
                        <p className="Timer-heading" style={{marginBottom:"15%"}}>Hours</p>
                        <img src={up} onClick={increaseHour}/>
                        <p className="Timer-time">{hours<10 ? '0'+hours : hours}</p>
                        <img src={down} onClick={decreaseHour}/>
                    </div>
                    <div className="Timer-colon">:</div>
                    <div>
                        <p className="Timer-heading">Minutes</p>
                        <img src={up} onClick={increaseMinute} />
                        <p className="Timer-time">{minutes<10? '0'+minutes : minutes}</p>
                        <img src={down} onClick={decreaseMinute}/>
                    </div>
                    <div className="Timer-colon">:</div>
                    <div>
                        <p className="Timer-heading">Seconds</p>
                        <img src={up} onClick={increaseSecond} />
                        <p className="Timer-time">{seconds<10? '0'+seconds : seconds}</p>
                        <img src={down} onClick={decreaseSecond}/>
                    </div>
                </div>
                <button className="Timer-button" onClick={()=>{setPlaying((prev)=>!prev)}}>
                    {playing? pause : start}
                </button>
            </div>
        </div>
    );
}

export default Timer;