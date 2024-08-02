/** API calling  */

export const fetchRestaurantList = async ()=>{
 const respone = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
 
 if (!respone.ok) {
    throw new Error(`HTTP error! status: ${respone.status}`);
  }

 const jsonResponse =  await respone.json()

 const {data} =  jsonResponse || {}

 console.log("data", data)
 return data

}