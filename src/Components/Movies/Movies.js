import { useEffect, useState } from "react"

function Movies({genre}){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '8d31e68911mshbc60c41d8eecf8fp117897jsn07a31855be3d',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        const fetchMovies = async()=>{
            if(genre == "Fiction")
            genre="Romance";
            if(genre == "Western")
            genre="Drama";
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
            <p style={{ color:"white",fontSize:"1.7rem",marginLeft:"5vw",color:"#878787",marginBottom:"1.2%"}}>{genre}</p>
            <div style={{display:"flex",marginLeft:"5vw",justifyContent:"space-between",width:"90vw"}}>
                {movies.map((movie,idx)=>{
                    return (
                    <div key={idx} style={{width:"20vw"}}>
                        <img src={movie?.primaryImage?.url} style={{objectFit:"cover",width:"20vw",height:"15vh",borderRadius:"12px"}}/>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Movies