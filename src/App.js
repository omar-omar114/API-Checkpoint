import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import UserList from './UserList';
import Localisation from './Localisation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [listOfUser, setlistOfUser] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setlistOfUser(response.data))
        .catch(error => console.log(error))
    }, [])
  
  const routes = [
    {
        path:'/',
        main: () => <UserList listOfUser={listOfUser}/> 
    },
    {
        path:'/users/:userId',
        main: () => <Localisation data={listOfUser}/>
    },
]

  return (
    <div className="App">
        <Switch>
            {routes.map((route,index) => (
                <Route 
                    key={index}
                    path={route.path}
                    children={route.main}
                    exact
                  />
            ))}
        </Switch> 
    </div>
  );
}

export default App;
