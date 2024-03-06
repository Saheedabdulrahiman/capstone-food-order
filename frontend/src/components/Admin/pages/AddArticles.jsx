import { useState ,useEffect, } from 'react';
import InputLabel from '../contents/InputLabel'
import ArticelItem from '../../list-items/ArticelItem';
import AdminNavigation from '../contents/AdminNavigation';

export default function AddArticles() {

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        description: '',
        category: 'Appetizer', // Default category
      });

      
const [loadedFoodArticle, setLoadedArticle] = useState([]);
const [loading, setLoading] = useState(true);
const [deleteLoading, setDeleteLoading] = useState(false);
const [editMode, setEditMode] = useState(false);
const [editItemId, setEditItemId] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
     

      const fetchArticles = async () => {
        const response = await fetch('http://localhost:3000/api/v1/admin/list-food-articles');
        if (!response.ok) {
          // Handle error
        }
        const articles = await response.json();
        setLoadedArticle(articles);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchArticles();
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          let url = 'http://localhost:3000/api/v1/admin/food-articles';
          let method = 'POST';
          if (editMode && editItemId) {
            url = `http://localhost:3000/api/v1/admin/list-food-articles/${editItemId}`;
            method = 'PATCH';
          }
    
          const response = await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            console.log('Food article created/updated successfully:', data);
            setFormData({
              image: '',
              name: '',
              description: '',
              category: 'Appetizer',
            });
            setEditMode(false);
            setEditItemId(null);
          } else {
            console.error('Error creating/updating food article:', data.error);
          }
          fetchArticles();
        } catch (error) {
          console.error('Network error:', error.message);
        } finally {
          setLoading(false);
        }
      };
   
      const handleOnDelete = async (id) => {
        setDeleteLoading(true);
        try {
          const response = await fetch(`http://localhost:3000/api/v1/admin/list-food-articles/${id}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          if (response.ok) {
            // Handle successful deletion
          } else {
            console.error('Error deleting article:', data.message);
          }
          fetchArticles();
        } catch (error) {
          console.error('Network error:', error.message);
        } finally {
          setDeleteLoading(false);
        }
      };


      const handleEdit = (id) => {
        const articleToEdit = loadedFoodArticle.find((article) => article._id === id);
        setEditMode(true);
        setEditItemId(id);
        setFormData({
          image: articleToEdit.image,
          name: articleToEdit.name,
          description: articleToEdit.description,
          category: articleToEdit.category,
        });
      };
      

  return (
   <>
   <AdminNavigation/>
      <form onSubmit={handleSubmit}>
     <div className='  lg:w-[40%] max-sm:w-[90%] md p-5  md:w-1/2  space-y-2 px-4  mx-auto border-2 rounded-sm '>
        
        <InputLabel label="name" type="text" name="name" value={formData.name} onChange={handleChange}  required/>
         <InputLabel label="image " name="image" value={formData.image} onChange={handleChange}   />
         
         <InputLabel label="description " name="description" value={formData.description} onChange={handleChange}   />
         
        <select name="category" value={formData.category} onChange={handleChange}>
        {['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Other'].map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
       <div className=' flex justify-center items-center '>
        <button type="submit" disabled={loading} className=' text-center py-2 px-4 bg-green-600 text-white font-bold capitalize rounded-xl'>
        {editMode ? 'Update food-article' : 'Add food-article'}</button>
        </div>
     </div>
     </form>

     <main className=' my-4 '>

<h2 className=' text-2xl font-semibold  ml-12 underline my-2'>food Articles</h2>
<div  className=' px-6  '>
{loading ? (
      <p>Loading...</p>
    ) : (
      <ul className="  w-full   gap-6 max-sm:flex-col  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:mx-6">
        {loadedFoodArticle.map((article) => (
         <ArticelItem key={article._id} article={article} 
         onDelete={()=>{handleOnDelete(article._id)}}
         onEdit={() => handleEdit(article._id)}
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
