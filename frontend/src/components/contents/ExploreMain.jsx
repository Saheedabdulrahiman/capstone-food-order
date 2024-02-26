import { useEffect, useState } from "react";
import ArticelItem from "../list-items/ArticelItem";
import articleImg from '../assets/flat-lay-healthy-vegetarian-dinner-table-setting-sandwiches-with-tomato-cucumber-avocado-strawberry-herbs-olives-snacks-clean-eating-vegan-food.jpg'
export default function ExploreMain() {
  const [loadedArticle, setLoadedArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
       async function fetchArticle ()  {
        
          const response = await fetch('http://localhost:3000/api/v1/user/list-food-articles',
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
      setLoadedArticle(meals)
      setLoading(false)
      }
     fetchArticle();
      
    }, []);
  return (
      <>
        <div className=" absolute md:left-10 lg:left-80 top-24 max-sm:left-8 sm:left-8   ">
         {/* <div className=" bg-blue-100 h-72 mr-6">
          <img className=" h-88 w-full " src={articleImg} alt="article-image" />
         

         </div> */}
      {loading ? (
        <p>Loading...</p>
      ) : (

         
        <ul className="   gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  lg:mx-6 ">
          {loadedArticle.map((article) => (
           <ArticelItem key={article._id} article={article}/>
          ))}
        </ul>
      )}
   </div> 
      
      </>
  )
}
