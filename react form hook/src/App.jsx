import { useForm,  } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState:{errors ,isSubmitting}
  } = useForm({
  
  });

  console.log(errors);

 async function onSubmit(data){

    // api call simulation

    await new Promise((resolve)=> setTimeout(resolve,3000));
    console.log("submitting the form ", data)
  }

  return (<>


<form onSubmit={handleSubmit(onSubmit) }>

  <div>
    <label > First Name: </label>
    <input {...register("firstName" , { required:"this is required" ,})}
    aria-invalid={errors.firstName ? "true" : "false"}/>
    <br />
    <label > Middle Name: </label>
    <input  {...register("middleName")}/>
    <br />
    <label > Last Name: </label>
    <input  {...register("lastName" ,{ required:"this is required" ,})}/>
    <p>{errors.lastName?.message}</p>
  </div>
  <br />
  <input type="submit" disabled={isSubmitting} />
</form>
  </>)
}

export default App;
