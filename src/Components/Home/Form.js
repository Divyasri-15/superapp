import './Form.css';
import React,{ useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Form() {

    const[FormData,setFormData]=useState({
        name:"",
        username:"",
        email:"",
        mobile:""
    });
    const[isShared, setisShared]=useState(false);
    const[error, seterror]=useState(false);
    const navigate=useNavigate();

    const validity={
        name:new RegExp(
            '^[a-zA-Z.,-]+$'),
        username:new RegExp(
            '^[a-zA-Z0-9_-]{3,15}$'),
        email:new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'),
        mobile:new RegExp(
            '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
    }
    
    const claimYourTrial = (e) => {
        e.preventDefault();
        if(!isShared || !validity.email.test(FormData.email) 
        || !validity.name.test(FormData.name)
        || !validity.username.test(FormData.username)
        || !validity.mobile.test(FormData.mobile))
        {
            seterror(true);
            return;
        }
        window.localStorage.setItem("userData",JSON.stringify(FormData))
        navigate('/category');
    };

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const handleCheckbox=(e)=>{
        setisShared(current=>!current);
    };

    return(
        <div className="form">
            <p className="form-super">Super app</p>
            <p className="form-header1">Create your new account</p>
            <p className="form-header2">Email <span style={{color: "#72DB73"}}>|</span> Google</p>
            <form className="form-body">
                <input type="text" name="name" placeholder="Name" value={FormData.name} onChange={handleChange}/>
                {error && !validity.name.test(FormData.name) ?
                    <label style={{color:"red"}}>Invalid Name!</label>:""}
                <input type="text" name="username" placeholder="UserName" value={FormData.username} onChange={handleChange}/>
                {error && !validity.username.test(FormData.username) ?
                    <label style={{color:"red"}}>Invalid Username!</label>:""}
                <input type="email" name="email" placeholder="Email" value={FormData.email} onChange={handleChange} />
                {error && !validity.email.test(FormData.email) ?
                    <label style={{color:"red"}}>Invalid Email!</label>:""}
                <input type="tel" name="mobile" placeholder="Mobile" value={FormData.mobile} onChange={handleChange} />
                {error && !validity.mobile.test(FormData.mobile) ?
                    <label style={{color:"red"}}>Invalid Mobile Number!</label>:""}
               
                <label className="form-label">
                    <input type="checkbox" name='check' onChange={handleCheckbox} />
                    {" "}Share my registration data with Superapp
                    {error && !isShared ?
                        <label style={{color:"red"}}><br/>Required!</label>:""}
                </label>

                <button type="submit" className="form-ButtonActive" onClick={claimYourTrial} >SIGN UP</button>
            </form>
            <div className="form-note">
                <p>
                    By clicking on Sign up. you agree to Superapp{" "}
                    <span>Terms and Conditions of Use</span>
                </p>
                <p>
                    To learn more about how Superapp collects, uese, shares and protects your personal data please head Superapp{" "}
                    <span>Privacy Policy</span>
                </p>
            </div>
        </div>
    );
}

export default Form