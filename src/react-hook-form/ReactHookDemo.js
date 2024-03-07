import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import './ReactHookDemo.css'
import { useState } from 'react';

function ReactHookDemo() {

  const {register, handleSubmit,watch, formState:{errors}}=useForm({defaultValues:{}});
  const countriesArray=['india', 'pakistan', 'afghanistan','sri lanka','west indies', 'australia', 'england', 'south africa'];

  const formSubmit=(user)=>{
    console.log(user)
  }
    
  return (
        <div className='w-50 mx-auto registrationPage'>
          <h2 className='formHeading'>Registration Form</h2>
            <form className='form w-50 py-3 ' onSubmit={handleSubmit(formSubmit)}>
              <input type='text' className='firstName' placeholder='First Name' {...register('firstName', {required:{value:true, message:'First Name is required'}, minLength:{value:3, message:'minimum 3 characters required'},maxLength:{value:36, message:'maximum 36 characters required'}, pattern: {value:/^[a-zA-Z]+$/, message:'First Name should not contain digits'}})}/>
              {errors.firstName && <p className='valError'>{errors.firstName.message}</p>}

              <input type='text' className='lastName' placeholder='Last Name' {...register('lastName', 
              {required:{value:true, message:'Last Name is required'}, minLength:{value:3, message:'minimum 3 characters required'},maxLength:{value:36, message:'maximum 36 characters required'}, pattern: {value:/^[a-zA-Z]+$/, message:'Last Name should not contain digits'}})}/>
              {errors.lastName && <p className='valError'>{errors.lastName.message}</p>}
              <div className='genderDiv'> 
              <label>Gender</label>
              <label htmlFor='gender'>
                <input type='radio' value='Male' {...register('gender',{required:{value:true,message:'Gender is required'}})}/>
                Male
              </label>
              <label htmlFor='gender'>
                <input type='radio' value='Female' {...register('gender',{ required:{value:true,message:'Gender is required'}})}/>
                Female
              </label>
              </div>
              {errors.gender && <p className='valError'>{errors.gender.message}</p>}
              <input type='email' className='email' placeholder='Email' {...register('email', {required:{value:true, message:'Email is required'}, pattern: {value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message:'should be a valid email id'}})}/>
              {errors.email && <p className='valError'>{errors.email.message}</p>}

              <select name='countries' id='countries' defaultValue={'country'} {...register('country',{required:true})}>
                {countriesArray.map((country)=><option key={country} value={country}>{country}</option>)}
              </select>
              {watch('country')==='country' && <p className='valError'>country must be selected</p>}

              <input className='phone' placeholder='Phone' {...register('phone', {
                required:{value:true, message:'Phone Number is required'}, minLength:{value:10, message:'must be a valid phone number'},maxLength:{value:10, message:'must be a valid phone number'}, pattern: {value:/^[0-9]+$/, message:'phone number must contain only digits'}})}/>
              {errors.phone && <p className='valError'>{errors.phone.message}</p>}

              <input type='password' className='password' placeholder='Password' {...register('password', {
              required:{value:true, message:'password is required'},
              pattern:{value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
              message:'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character' 
              }})}/>
              {errors.password && <p className='valError'>{errors.password.message}</p>}
              <button className='registerBtn'>Register</button>
            </form>
        </div>
  )
}

export default ReactHookDemo