import './Banner.css';
import image from '../../Assets/Home.png';

function Banner(){
    return (
        <div className="Banner">
            <img src={image}/>
            <div className="Banner_top">
                <p>Already have an account?</p>
                <button>LOGIN</button>
            </div>
            <div className="Banner_bottom">
                <p>Discover new things on <br/>Superapp</p>
            </div>
        </div>
    );
}

export default Banner