import React from 'react'
import {configureStore} from'@reduxjs/toolkit'
import userreducer from './Userditails'
const  Store=configureStore({
reducer:{
    user:userreducer
}
}) 



export default Store
