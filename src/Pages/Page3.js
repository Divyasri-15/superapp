import Info from '../Components/Profile/Info.js';
import Weather from '../Components/Profile/Weather.js';
import Notes from '../Components/Profile/Notes.js';
import News from '../Components/Profile/News.js';

function Page3() {
    return (
      <div style={{marginTop: "4vh"}}>
        <div style={{display:"flex"}}>
          <div>
            <Info/> 
            <Weather/>
          </div>
          <Notes/>
          <News/>
        </div>
      </div>
    );
  }
  
  export default Page3;