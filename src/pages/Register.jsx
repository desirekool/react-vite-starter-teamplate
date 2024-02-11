import { SubmitButton, FormInput } from "../components";
import { Link, Form, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from 'react-toastify';



function Register() {
  return (
    <section className="grid place-items-center h-screen">
      <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h3 className="text-center font-bold text-4xl">Register</h3>
        <FormInput 
          label="username" 
          type="username" 
          name="username"           
        />
        <FormInput 
          label="email" 
          type="email" 
          name="email"           
        />
        <FormInput 
          label="Password" 
          type="password" 
          name="password" 
        />
        <div className="mt-4">
            <SubmitButton text="Register" />          
        </div>        
        <p className="text-center">
          Already have an account? <Link to="/login" className="ml-2 link-hover link-primary capitalize">Login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register