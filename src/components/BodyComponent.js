import { RestaurantCard } from "./RestaurantCard";
import Skeleton from 'react-loading-skeleton'


import data from "../../data.json";
import React, { useState, useEffect } from "react";
import { fetchRestaurantList } from "../network/apiCall";

const BodyComponent = () => {
  const [searchInput, setSearchInput] = useState();
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterData, setFilterData] = useState(restaurantList);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetchData()
  }, []);


  useEffect(() => {
    if(searchInput?.length > 0){

     const newfilterData =  filterData?.filter(item => item.info.name?.toLowerCase().includes(searchInput?.toLowerCase()))
     setFilterData(newfilterData)
    }else {
        setFilterData(restaurantList)
    }
   
  }, [searchInput]);

  const fetchData =  async()=>{
    const data =  await fetchRestaurantList();
    const { cards = [] } = data || {};
    const restaurantList =
      cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log("restaurantList", restaurantList);
    setRestaurantList(restaurantList)
    setFilterData(restaurantList)
  }

  const topRatedRest = () => {
    const filterFoodData = filterData.sort((a, b) => {
      if (a.info.avgRating > b.info.avgRating) {
        return -1;
      } else if (a.info.avgRating < b.info.avgRating) {
        return 1;
      } else {
        return 0;
      }
    });
    setFilterData([...filterFoodData]);
  };

  return (
    <div className="body">
      <div className='search'>
        <input className="searchInput"  placeholder="Search Restaurant" value={searchInput} onChange={(e)=>{
            setSearchInput(e.target.value)
        }} />
      </div>
      <button className="top-rated-btn" onClick={topRatedRest}>
        {" "}
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filterData?.map((item) => {
          return RestaurantCard(item);
        })}
      </div>
    {filterData.length ===0 && <div className="res-container">
        
         {items?.map((item) => {
          return <div className="skeleton" />
        })}
      </div>}
    </div>
  );
};

export default BodyComponent;
