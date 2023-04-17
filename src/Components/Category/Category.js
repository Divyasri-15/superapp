import './Category.css';
import action from '../../Assets/Action.png';
import drama from '../../Assets/Drama.png';
import romance from '../../Assets/Romance.png';
import thriller from '../../Assets/Thriller.png'
import western from '../../Assets/Western.png';
import horror from '../../Assets/Horror.png'
import fantasy from '../../Assets/Fantasy.png';
import music from '../../Assets/Music.png'
import fiction from '../../Assets/Fiction.png'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Category(){

    const genres = [
        {
            id:"Action",
            color:"#FF5209",
            image:<img style={{width:"12vw", height:"14vh"}}  src={action}/>
        },
        {
            id:"Drama",
            color:"#D7A4FF",
            image:<img style={{width:"12vw", height:"14vh"}}  src={drama} alt='drama'/>
        },{
            id:"Romance",
            color:"#148A08",
            image:<img style={{width:"12vw", height:"14vh"}}  src={romance} alt='romance'/>
        },
        {
            id:"Thriller",
            color:"#84C2FF",
            image:<img style={{width:"12vw", height:"14vh"}}  src={thriller} alt='thriller'/>
        },
        {
            id:"Western",
            color:"#912500",
            image:<img style={{width:"12vw", height:"14vh"}}  src={western} alt='western'/>
        },
        {
            id:"Horror",
            color:"#7358FF",
            image:<img style={{width:"12vw", height:"14vh"}}  src={horror} alt='horror'/>
        },
        {
            id:"Fantasy",
            color:"#FF4ADE",
            image:<img style={{width:"12vw", height:"14vh"}}  src={fantasy} alt='fantasy'/>
        },
        {
            id:"Music",
            color:"#E61E32",
            image:<img style={{width:"12vw", height:"14vh"}}  src={music} alt='music'/>
        },
        {
            id:"Fiction",
            color:"#6CD061",
            image:<img style={{width:"12vw", height:"14vh"}}  src={fiction} alt='fiction'/>
        }
    ]

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [error,setError] = useState(false);
    
    const handleRemoveCategory = (categoryToRemove) => {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category !== categoryToRemove)
        );
    };
    const handleSubmit = ()=>{
        if(categories.length<3)
        {
            setError(true);
            return;
        }
        window.localStorage.setItem("categories", JSON.stringify([...categories]))
        navigate('/profile')
    }

    return(
        <>
            <div className="Category-body">
                <div className="Category-left">
                    <p className="Category-header1">Super app</p>
                    <p className="Category-header2">Choose your entertainment category</p>
                    {categories && (
                    <div className="Category">
                        {categories.map((category) => {
                        return (
                            <button key="category" className="Category-tag">
                                {category} &nbsp; 
                                <span style={{color: "#085C00"}} onClick={() => handleRemoveCategory(category)}>X</span>
                            </button>
                        );
                        })}
                    </div>
                    )}
                </div>
                
                <div className="Category-right"> 
                    {genres.map((data,key) => (
                        <Card data={data} categories={categories} setCategories={setCategories}/>
                    ))}
                </div>
                {error && categories.length<3 ? 
                    <label style={{color:"red", position:"absolute", bottom:"9vh", left:"48vw", fontSize:"1.3rem"}}><br/>Please select atleast 3 categories!</label>:""}
                <button type="submit" className="Category-submit" onClick={handleSubmit}>Next Page</button>
            </div>
        </>
    )
}

const Card =({data,key,categories,setCategories})=>{

    const [selected,setSelected]=useState(false);

    const handleCategory=(e)=>{
        if(categories.includes(data.id)){
            setCategories((prevCategories) =>
                prevCategories.filter((category) => category !== data.id)
            );
        }
        else{
            setCategories((prevCategories) => [...prevCategories,data.id]);
        }
        // setSelected(!selected)
    };

    useEffect(()=>{
        setSelected(categories.includes(data.id)===true)
    },[categories,data.id])

    return(
        <div className="Category-card" key={key} style={{backgroundColor: data.color,border:`${selected?"4px solid #11B800":"0px"}`}} onClick={handleCategory} >
            <p>{data.id}</p>
            <div className="Category-image" >{data.image}</div>
        </div>
    )
}

export default Category;