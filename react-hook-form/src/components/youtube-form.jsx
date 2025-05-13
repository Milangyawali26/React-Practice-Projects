import React from 'react'
import {useForm} from  "react-hook-form"
import { DevTool } from '@hookform/devtools';


let renderCount=0



const YoutubeForm = () => {
   const form = useForm();


   const{register,control ,handleSubmit}=form;

   const onSubmit=(data)=>{
    console.log('form submitted' ,data)
   }

   renderCount++

  return (
    <div>
      <h1 > youtube form ({renderCount/2})</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" {...register("username")}></input>

        <label htmlFor='email'>E-mail</label>
        <input type="email" id="email"{...register("email")}></input>
        
        <label htmlFor='channel'>Channel</label>
        <input type="text" id="channel" {...register("channel")}></input>
    
     <button> submit </button>
      </form>
      <DevTool control={control}/>
    </div>
    
  )
}

export default YoutubeForm
