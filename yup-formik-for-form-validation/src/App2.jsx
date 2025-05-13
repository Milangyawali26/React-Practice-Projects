import React from "react";
import { useField, Formik } from "formik";
import {object, string} from "yup";
import TextField from "./TextField";

const App2 = () => {


    const userLoginSchema=object({
        email:string().email().required("email chiyo hai "),
        password:string().required().min(7).max(30)
        
    })
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
            console.log(data)
            console.log("form Submitted");
        }} 

        validationSchema={userLoginSchema}
        // custom validation 

        // validate={(values)=>{
        //     if(values.email.length<1){
        //         return ( {email : " email is required "})
        //     }
        // }}


      >
        {/* errors , handlechange , handle submit , values ,  */}
        {({ errors, handleChange, handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
           <label htmlFor="">Email </label><TextField name="email"></TextField>
           <label htmlFor="">Password </label><TextField name="password"></TextField>
       
              <input
                type="submit"
                className="bg-gray-200 ml-6 text-2xl rounded-lg"
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App2;
