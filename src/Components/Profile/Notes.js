import { useState } from "react";
import circle from '../../Assets/circle.png';
import pen from '../../Assets/pen.png';

function Notes()
{
    const [text,setText] =useState(JSON.parse(window.localStorage.getItem("text")));
    const handleOnchange=(e)=>{
        setText(e.target.value);
        window.localStorage.setItem("text",JSON.stringify(text));
    };

    return(
        <div style={{height:"54vh",width:"22vw", position:"relative", marginLeft:"2.6vw",borderRadius:"19px",background:"#F1C75B", padding:"0% 3%"}}>
            <p style={{color:"black",fontSize:"2rem",fontWeight:"600",marginBottom:"4%"}}>
                All notes
            </p>
            <textarea style={{width:"21vw", height:"42vh",margin:"auto", border:"none",background:"transparent",lineHeight:"130%",fontWeight:"400",fontSize:"1rem",resize:"none",outline:"none"}} value={text} onChange={(e)=>handleOnchange(e)}/>
            <img src={circle} style={{width:"12%",height:"12%",position:"absolute",bottom:"2.8vh",right:"1.5vw"}}/>
            <img src={pen} style={{width:"5.5%",height:"5.5%",position:"absolute",bottom:"4.9vh",right:"2.4vw"}}/>
        </div>
    );
}

export default Notes;