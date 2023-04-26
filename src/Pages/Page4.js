import Movies from "../Components/Movies/Movies.js"

function Page4(){
    const movies = JSON.parse(window.localStorage.getItem("categories"))
    return(
        <>
            <div style={{minHeight:"100vh",overflowX:"hidden"}}>
                <p style={{color:"#72DB73",fontSize:"2.4rem",marginTop:"2vh",marginLeft:"2vw"}}>Super app</p>
                <p style={{color:"#FFFFFF",fontSize:"1.8rem",marginLeft:"4vw",marginTop:"-1.3%",marginBottom:"-0.8%",letterSpacing:"0.02em",fontWeight:"550"}}>Entertainment according to your choice</p>
                {movies.map((movie)=><Movies genre={movie}/>)}
            </div>
        </>
    )
}

export default Page4;