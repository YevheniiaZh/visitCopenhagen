import { placesData } from "./PlacesData.js";
import { useState } from "react";
import FilterButtons from "./FilterButtons.js";


function Home(){
    const [place, setPlace] = useState(placesData);
    const [showText, setShowText] = useState(false);

    // Function for filtering per one searchTerm per place
    //const chosenPlaces = (searchTerm) =>{
     //   const newPlaces = placesData.filter(element =>element.searchTerm === searchTerm);
     //   setPlace(newPlaces);
    //}

   

    const showTextClick = (item) =>{
        item.showMore = !item.showMore;
        setShowText(!showText);
    };

    return(
        <div>
            <div className="container">
                {/* Giving props to FilterButton component if there were filtering only per one searchterm per item  */}
            {/*  <FilterButtons filteredPlaces = {chosenPlaces} /> */}

            {/* Searching per multiple SearchTerms per item*/}
            <FilterButtons 
            data ={placesData}
            setPlace={setPlace}/>
            </div>
        <div className="container">
            {
                place.map((item) =>{
                    const {id, placeName, searchTerm, image, showMore, description} = item;
                    return(
                        <div className="place-card" key = {id}>     
                            <h2>{placeName}</h2>
                            <img src = {image} width="300px"  height=" 200px"alt="place"/>
                            <p>
                            {showMore ? description : description.substring(0, 100) + "..."}
                                <button className="btn" onClick={() =>showTextClick(item)}>{showMore ? "show less" : "show more"}</button>
                            </p> 
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Home;