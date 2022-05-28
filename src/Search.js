function Search() {

    
    function conInput(e) {
        console.log(e.target.value);
    }
  return (
    <div className="SearchField">
        <p>Search Movies:</p>
      <input name='searchMovie' onChange={conInput} />
     
    </div>
  );
}

export default Search;
