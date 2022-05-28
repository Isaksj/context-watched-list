function Movie({name, func}) {
   

    return (
        <button className='Movie' onClick={func}>
            <h3>
                {name} 
            </h3>
        </button>
    );  
}

export default Movie;