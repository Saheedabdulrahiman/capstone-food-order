import { useState ,useEffect, } from 'react';
import InputLabel from '../contents/InputLabel'
import MealItem from '../../list-items/MealItem';
import AdminNavigation from '../contents/AdminNavigation';

export default function AddFoodItem() {

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        nameOfRestaurant: '',
        price: '',
        category: 'Appetizer', // Default category
      });

      
const [loadedFood, setLoadedFood] = useState([]);
const [loading, setLoading] = useState(true);
const [deleteLoading, setDeleteLoading] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await fetch('http://localhost:3000/api/v1/admin/addFood', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            console.log('Food item created successfully:', data);
            // Reset form fields
            setFormData({
              image: '',
              name: '',
              nameOfRestaurant: '',
              price: '',
              category: 'Appetizer',
            });
          } else {
            console.error('Error creating food item:', data.error);
          }
        } catch (error) {
          console.error('Network error:', error.message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        async function fetchRestaurants ()  {
         
           const response = await fetch('http://localhost:3000/api/v1/admin/list-items');
         if(!response.ok){
           //..errror handling later
         }
       const meals = await response.json();
       setLoadedFood(meals)
       setLoading(false)
       }
      fetchRestaurants();
       
     }, []);
   
     const handleOnDelete = async (id) => {
        setDeleteLoading(true);
        try {
          const response = await fetch(`http://localhost:3000/api/v1/admin/list-items/${id}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          if (response.ok) {
            // If the deletion was successful, call the handleDelete function passed from the parent component
          
          } else {
            // Handle the case where the server returns an error
            console.error('Error deleting restaurant:', data.message);
          }
        } catch (error) {
          // Handle any network errors
          console.error('Network error:', error.message);
        } finally {
          setDeleteLoading(false);
        }
      };
      
      
      

  return (
   <>
   <AdminNavigation/>
      <form onSubmit={handleSubmit}>
     <div className='  lg:w-[30%] max-sm:w-[90%] md p-5  md:w-1/2  space-y-2 px-4  mx-auto border-2 rounded-sm '>
        
        <InputLabel label="name" type="text" name="name" value={formData.name} onChange={handleChange}  required/>
        <InputLabel label=" restaurant" type="text" name="nameOfRestaurant" value={formData.nameOfRestaurant} onChange={handleChange}    />
        <InputLabel label="image " name="image" value={formData.image} onChange={handleChange}   />
        <InputLabel label="price " name="price" type="number" value={formData.price} onChange={handleChange}  />
        <select name="category" value={formData.category} onChange={handleChange}>
        {['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Other'].map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
       <div className=' flex justify-center items-center '>
        <button type="submit" disabled={loading} className=' text-center py-2 px-4 bg-green-600 text-white font-bold capitalize rounded-xl'>Add food-item</button>
        </div>
     </div>
     </form>

     <main className=' my-4 '>

<h2 className=' text-2xl font-semibold  ml-12 underline my-2'>food items</h2>
<div  className=' px-6  '>
{loading ? (
      <p>Loading...</p>
    ) : (
      <ul className="  w-full  gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:mx-6">
        {loadedFood.map((meal) => (
         < MealItem key={meal._id} meal={meal} 
         onDelete={()=>{handleOnDelete(meal._id)}}
         loading={deleteLoading}
         isAdmin={true}/>
         
        ))}
      </ul>
    )}
</div>
</main>

   </>
  )
}
