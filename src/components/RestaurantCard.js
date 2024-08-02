import { IMAGE_BASE_URL } from "../../api"

export const RestaurantCard = (item)=>{

    const {info} = item || {}

    console.log("RestaurantCard Image - ",info)

  return (  <div className='res-card' >
         <div className='res-img-container'>
         <img className='res-logo'  src={IMAGE_BASE_URL +info?.cloudinaryImageId }></img>
         </div>
         <div className='res-prop'>
              <div className='card-title'>{info?.name}</div>
              <div className='card-min'>{info?.costForTwo}</div>
              <div className='card-rating'>{info?.avgRating} rated</div>
              <div className='card-address'>{`${info?.locality } ${info?.areaName}`}</div>
         </div>
    </div>
  )
}
