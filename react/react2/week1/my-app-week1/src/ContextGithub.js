import React, { useState } from 'react'
import './App.css';
import GithubUser from './GithubUser'

export const userContext = React.createContext( null );

 function ContextGithub() {
     const [ userName, setuserName ] = useState( "" )

   
    const handelChange = (e) => {
        setuserName(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Search' value={userName} onChange={handelChange}/>
        <userContext.Provider value={userName}>
        <GithubUser userName={ userName } />
        </userContext.Provider>
    </div>
  )
  
}

export default ContextGithub;