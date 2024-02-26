
import { useEffect, useState } from "react";
import RestItem from "../list-items/RestItem";
import { getAuthToken } from "../../utils/auth";
export default function ListRestaurants() {

    const [loadedRest, setLoadedRest] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    
  
     
  
      useEffect(() => {
         async function fetchRestaurants ()  {
          const token = getAuthToken();
            const response = await fetch('http://localhost:3000/api/v1/user/list-restaurants',
            {
              headers:{
              
              'Authorization': 'Bearer '+ token
              }
            }
            );
          if(!response.ok){
            //..errror handling later
          }
        const meals = await response.json();
        setLoadedRest(meals)
        setLoading(false)
        }
       fetchRestaurants();
        
      }, []);

  return (
    <>
     <div className=" absolute md:left-10 lg:left-80 top-24 max-sm:left-8 sm:left-8   ">
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="   gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:mx-6">
          {loadedRest.map((restaurant) => (
           <RestItem key={restaurant._id} restaurant={restaurant}/>
          ))}
        </ul>
      )}
   </div>

    </>
  )
}
