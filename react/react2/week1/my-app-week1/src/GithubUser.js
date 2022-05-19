import React, { useState, useEffect } from 'react'
import './App.css';
import  {userContext} from './ContextGithub';


function GithubUser() {    
    const [ users, setUsers ] = useState([])
    const userName = React.useContext( userContext );
    
    useEffect(() =>
    {
            if(userName !== ""){
                fetch(`https://api.github.com/search/users?q=${userName}`)
                    .then( ( re ) => re.json() )
                    .then(( data ) => setUsers(data.items))
                console.log(users)
            } 
    }, [userName] )
    

    const getUsersNames = userName === "" ? "No results...":
        ( users.map((user) => (
            <li key={user.id}>
                {user.login}</li>
        )))

    return (
        <div>
                {getUsersNames}
        </div>
    ) 
}

export default GithubUser;