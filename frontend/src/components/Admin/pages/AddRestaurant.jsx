
import { useState ,useEffect, } from 'react';
import InputLabel from '../contents/InputLabel'
import RestItem from '../../list-items/RestItem';
import AdminNavigation from '../contents/AdminNavigation';
import { getAuthToken } from '../../../utils/auth';



export default function AddRestaurant() {



  const [formData, setFormData] = useState({
    name: '',
    image: '',
    location: '',
    openingHours: '',
    closingHours: ''
});

const [loadedRest, setLoadedRest] = useState([]);
const [loading, setLoading] = useState(true);
const [deleteLoading, setDeleteLoading] = useState(false);

const handleOnDelete = async (id) => {
  setDeleteLoading(true);
  try {
    const response = await fetch(`http://localhost:3000/api/v1/admin/list-restaurants/${id}`, {
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


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
   const token = getAuthToken();
    try {
        const response = await fetch('http://localhost:3000/api/v1/admin/add-restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to add restaurant');
        }

        // Reset the form after successful submission
        setFormData({
            name: '',
            image: '',
            location: '',
            openingHours: '',
            closingHours: ''
        });

        alert('Restaurant added successfully!');
    } catch (error) {
        console.error('Error adding restaurant:', error);
        alert('Failed to add restaurant. Please try again.');
    }
};


  useEffect(() => {
     async function fetchRestaurants ()  {
      
        const response = await fetch('http://localhost:3000/api/v1/admin/list-restaurants');
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
   <AdminNavigation/>
   <form onSubmit={handleSubmit}>
     <div className='  lg:w-1/4 max-sm:w-[90%] md p-5  md:w-1/2  space-y-2 px-4  mx-auto border-2 rounded-sm '>
        
        <InputLabel label="name" type="text" name="name" value={formData.name} onChange={handleChange}  required/>
        <InputLabel label="location" type="text" name="location" value={formData.location} onChange={handleChange}    />
        <InputLabel label="image " name="image" value={formData.image} onChange={handleChange}   />
        <InputLabel label="opening " name="openingHours" type="text" value={formData.openingHours} onChange={handleChange}  />
        <InputLabel label="closing" type="text" name="closingHours" value={formData.closingHours} onChange={handleChange}   />
       <div className=' flex justify-center items-center '>
        <button type="submit" className=' text-center py-2 px-4 bg-green-600 text-white font-bold capitalize rounded-xl'>Add Restaurant</button>
        </div>
     </div>
     </form>
<main className=' my-4 '>

  <h2 className=' text-2xl font-semibold  ml-12 underline my-2'>Restaurants</h2>
  <div  className=' px-6  '>
  {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="  w-3/4  gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:mx-6">
          {loadedRest.map((restaurant) => (
           <RestItem key={restaurant._id} restaurant={restaurant} isAdmin={true}
           onDelete={()=>{handleOnDelete(restaurant._id)}}
           loading={deleteLoading}/>
           
          ))}
        </ul>
      )}
  </div>
</main>

   </>
  )
}
