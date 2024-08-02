import { RestaurantCard } from "./RestaurantCard"
import data from '../../data.json'
import React, {useState} from "react";

const BodyComponent = ()=> {
    const [foodData, setFooddata] = useState([...data])

    const topRatedRest = ()=>{
     const filterFoodData = foodData.sort((a,b)=>{
           if( a.info.avgRating > b.info.avgRating){
            return -1
           }else if(a.info.avgRating < b.info.avgRating){
            return 1
           }else {
            return 0
           }
        })
        setFooddata([...filterFoodData])
    }


 return (   
 <div className='body'>
         {/* <div className='search'>Search</div> */}
         <button className="top-rated-btn" onClick={topRatedRest}> Top Rated Restaurants</button>
         <div className='res-container'>
             { foodData?.map(item => {
              return RestaurantCard(item)
             })}
         </div>
    </div>
 )
}


export default BodyComponent