import Profile from '../../Assets/Profile.png';
import './Info.css';

function Info(){
    const info = JSON.parse(window.localStorage.getItem("userData"));
    const categories = JSON.parse(window.localStorage.getItem("categories"));
    return(
        <div className="Info">
            <img className="Info-image" src={Profile} alt="profile"/>
            <div className="Info-userData">
                <p>{info.name}</p>
                <p style={{marginTop: "3vh"}}>{info.email}</p>
                <p style={{fontWeight:"500",fontSize:"2rem", lineHeight:"1%"}}>{info.username}</p>
                <div className="Info-category">                   {categories.map((category) => {
                            return (
                                <button key="category" className="Info-categoryTag">
                                    {category}  &nbsp; 
                                    <span style={{color: "rgba(0, 0, 0, 0.42)"}}>X</span>
                                </button>
                            );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Info;