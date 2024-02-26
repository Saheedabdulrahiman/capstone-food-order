
// import LoginInput from '../../UI/LoginInput'
// import Button from '../../UI/LoginButton'
// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function LoginAdmin() {

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
// });
// const [error, setError] = useState('');
// const navigate = useNavigate()
// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//       const response = await fetch('http://localhost:3000/api/v1/admin/admin-login', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//           throw new Error(data.error || 'Failed to login');
//       }

//       // Store the token in local storage
     
    
//       localStorage.setItem('token', data.token);
      
    
//    navigate('/admin/add-item')
//       // Show alert for successful login
//       alert('Login successful!');
//       setFormData({
//         email: '',
//     password: ''
//       })

//       // Log the token in console
//       console.log('Token:', data.token);

//       // // Redirect to the explore page
//       // navigate('/explore');
      
//   } catch (error) {
//       console.error('Error logging in:', error);
//       setError(' You are note authorized to visti this page...'); 
//   }
// };
//   return (
//     <>
//       <div className=' bg-stone-50 flex flex-col justify-center items-center max-sm:w-3/4 w-1/4 p-4  border-2 rounded-xl mt-16 mx-auto  '>
//          <h2 className=' capitalize font-bold text-lg my-4'>admin login</h2>

//          {error && <p className=' text-red-600 font-semibold text-lg  my-4 border-2 p-2 border-red-300 '>{error}</p>}
//         <form onSubmit={handleSubmit} className=' space-y-3 w-3/4'>
//         <LoginInput  type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required  />
//               <LoginInput type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />


//             <Button label="login" type="submit"/>

//         </form>
//       </div>
//     </>
//   )
// }
