import Info from '../Components/Profile/Info.js';
import Weather from '../Components/Profile/Weather.js';
import Notes from '../Components/Profile/Notes.js';
import News from '../Components/Profile/News.js';
import Timer from '../Components/Profile/Timer.js';
import {useNavigate} from 'react-router-dom';

function Page3() {
  const navigate = useNavigate()
  const handleClick = ()=>{
      navigate("/movies")
  }
  return (
    <div style={{marginTop: "4vh"}}>
      <div style={{display:"flex"}}>
        <div>
          <Info/> 
          <Weather/>
          <Timer/>
        </div>
        <Notes/>
        <News/>
      </div>
      <button style={{position:"absolute",bottom:"2vh",right:"3vw",background:"green",border:"none",color:"#FFFFFF",padding:"0.5% 3%",borderRadius:"19px",fontSize:"1.15rem",letterSpacing:"0.02em",fontWeight:"500"}} onClick={handleClick}>Browse</button>
    </div>
  );
  }
  
  export default Page3;