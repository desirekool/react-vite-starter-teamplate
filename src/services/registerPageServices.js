import { redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from 'react-toastify';
import { loginUser } from "../redux/user/userSlice";

export const action = async (request) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('Registration successful');
    return redirect('/login');    
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || 'please double check your credentials';
    
    toast.error(errorMessage);
    return null;    
  }
}