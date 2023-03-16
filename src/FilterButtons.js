function FilterButtons({filteredPlaces}){
    return(
        <div>
            <button className="filterButton" onClick={() =>filteredPlaces("se&do")}>Se&Do</button>
            <button  className="filterButton" onClick={() =>filteredPlaces("eat&drink")}>Eat&Drink</button>
        </div>
    )
}
export default FilterButtons;