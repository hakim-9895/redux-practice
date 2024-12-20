import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const Userditails = createSlice({
    name:'user',
    initialState:{
        name: '',
        age: 0,
      },
      reducers:{
        username:(state,action)=>{

            state.name=action.payload.name,
            state.age=action.payload.age
        },
       
           
        }

      }

)

export default Userditails.reducer
export  const {username}=Userditails.actions
