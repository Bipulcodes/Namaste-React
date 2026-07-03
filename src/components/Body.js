import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import { IMAGE_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
    //state variable are the - Suoeroowerful variables 
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [searchText , setSearchText] = useState("");
    console.log("body re-rendered");
    
    useEffect(()=>{fetchData();},[]);

    const fetchData = async () => {
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const data = await fetch("/api/swiggy/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        const json = await data.json();
        const restaurantData = json?.data?.cards?.find((item)=> item?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestraunt(restaurantData);
        //console.log(restaurantData);
        
       console.log(listOfRestaurants);
//        const filerRestaurant = restaurantData?.filter(restaurant => 
//   restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
//   console.log(filerRestaurant);
        
        
        //console.log(json?.data?.cards?.find((item)=> item?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    //conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? (<Shimmer/>):(
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=> {setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        //filter the restaurant     
                        const filteredList = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRestraunt(filteredList)
                        console.log(filteredList);
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4.5
                    );
                    setListOfRestraunt(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {/* {
                listOfRestaurants.map((restaurant) => (<ResturantCard key={restaurant.data.id} resData = {restaurant} />))
            } */
            listOfRestaurants?.map(res => (<ResturantCard key ={res.info.id} data = {res?.info}/>))
            
        
            }
            </div>
        </div>
    );
}

export default Body;
