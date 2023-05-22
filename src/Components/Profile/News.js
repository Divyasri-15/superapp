import { useEffect, useState } from "react";

function News()
{
    const [news, setNews] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac1de103681e465487b11f645c570992")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
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
        <div style={{height:"90vh",width:"28vw", position:"relative", borderRadius:"19px",marginLeft:"2.5vw"}}>
            <img src={news.urlToImage} style={{height:"50vh",width:"28vw", borderRadius:"19px 19px 0px 0px"}}/>
            <div style={{ height:"31.5vh",borderRadius:"0px 0px 19px 19px",background:"#FFFFFF",fontSize:"1.04em",fontWeight:"400",fontStyle:"normal",padding:"4% 7%",textAlign:"justify",lineHeight:"135%"}}>
                {news.description}
            </div>
            <div style={{position:"absolute",background:"rgba(0, 0, 0, 0.74)",top:"28vh",height:"22vh",boxSizing:"border-box",padding:"0% 5%"}}>
                <p style={{color:"white",fontSize:"1.35rem",fontWeight:"500",marginBottom:"3%"}}>{news.title}</p>
                <span style={{color:"white",fontSize:"1.1rem",fontWeight:"600"}}>{date}</span> &nbsp;
                <span style={{height: "1vh",border: "0.001rem solid #FFFFFF"}}></span> &nbsp;
                <span style={{color:"white",fontSize:"1.1rem",fontWeight:"600"}}>{time}</span>
            </div>
        </div>
    );
}

export default News;