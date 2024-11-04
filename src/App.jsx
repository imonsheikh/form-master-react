import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'
import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import GrandPa from './components/Grandpa/GrandPa'

function App() {

  const handleSignUpSubmit = data => {
    // e.preventDefault()
    console.log('sign up data', data);
    
  }
  const handleUpdateProfile = data => {
    // e.preventDefault()
    console.log('Updata profile', data);
    
  }


  return (
    <>
  
      {/* <h1>Vite + React</h1> */}
      {/* <SimpleForm></SimpleForm>  */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm 
      formTitle={'Sign Up by form title'}
      handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign UP</h2>
          <p>Please Sign Up Right</p>
        </div>
      </ReusableForm>

      <ReusableForm 
      formTitle={'Profile Update by form title'} 
      submitBtnText='Update'
      handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always Keep your profile update</p>
        </div>
      </ReusableForm> */}
       <h1>Form Master</h1>
      <GrandPa></GrandPa>
    </>
  )
}

export default App
