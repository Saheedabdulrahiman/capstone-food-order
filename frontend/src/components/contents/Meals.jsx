import { useEffect, useState } from "react";
import MealItem from "../list-items/MealItem";



export default function Meals() {
  const [loadedMeal, setLoadedMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

   

    useEffect(() => {
       async function fetchMeals ()  {
        
          const response = await fetch('http://localhost:3000/api/v1/user/list-items',
          // {
          //   headers:{
          //    ' Content-Type':'application/json',
          //    Authorization: 'Bearer '+ localStorage.getItem('access'),
          //   }
          // }
          );
        if(!response.ok){
          //..errror handling later
        }
      const meals = await response.json();
      setLoadedMeal(meals)
      setLoading(false)
      }
     fetchMeals();
      
    }, []);

  return (
    <>
    
     <div className=" absolute md:left-10 lg:left-80 top-24 max-sm:left-8 sm:left-8   ">
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="   gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:mx-6">
          {loadedMeal.map((meal) => (
           <MealItem key={meal._id} meal={meal}/>
          ))}
        </ul>
      )}
   </div>
   

   
    
      
   
    
   
    
   
    </>
  );
}
