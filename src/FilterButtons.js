function FilterButtons({data, setPlace}){
 
    const filteredPlaces = searchTerm => {
        const filteredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(term =>{
                if(term === searchTerm){
                    filteredResult.push(item);
                    setPlace(filteredResult);
                }
            })
        })
    }



    return(
        <div>
            <button className="filterButton" onClick={() =>filteredPlaces("se&do")}>Se&Do</button>
            <button  className="filterButton" onClick={() =>filteredPlaces("eat&drink")}>Eat&Drink</button>
            <button  className="filterButton" onClick={() =>filteredPlaces("popular")}>Cool&popular</button>
        </div>
        
    )
}
export default FilterButtons;