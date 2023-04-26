import Movies from "../Components/Movies/Movies.js"
import Toggle from "../Assets/toggle.png";
import {useNavigate} from 'react-router-dom';

function Page4(){
    const movies = JSON.parse(window.localStorage.getItem("categories"));
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/profile");
    }
    return(
        <>
            <img src={Toggle} onClick={handleClick} style={{position:"absolute",top:"3.5vh",right:"5vw",height:"7.5vh",width:"3.8vw"}}/>
            <div style={{minHeight:"100vh",overflowX:"hidden"}}>
                <p style={{color:"#72DB73",fontSize:"2.4rem",marginTop:"2vh",marginLeft:"2.5vw"}}>Super app</p>
                <p style={{color:"#FFFFFF",fontSize:"1.8rem",marginLeft:"5vw",marginTop:"-1.3%",marginBottom:"-0.8%",letterSpacing:"0.02em",fontWeight:"550"}}>Entertainment according to your choice</p>
                {movies.map((movie)=><Movies genre={movie}/>)}
            </div>
        </>
    )
}

export default Page4;