import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider} from 'react-redux'
import Store from './Combonnet/Store'
import Name from './Combonnet/Name'

function App() {
 

  return (
    <>
    <Provider store={Store}>
      <Name/>
    </Provider>

    </>
  )
}

export default App
