import './UserList.css';
import { useEffect, useState } from "react";
import login from './user.jfif';
import { Link } from "react-router-dom";

const UserList = (props) => {

    return (
<div className="listUsers">
{props.listOfUser.map(user => (
<div key={user.id} className="card">
    <img src={login} alt="" width='100' height='100'/>
    <div>
    <Link to={`/users/${user.id}`}> <h4>{user.name}</h4> </Link>
    <p>phone : {user.phone}</p>
    <p>email : {user.email}</p>
    <p>website : {user.website}</p>
    <p>company : {user.company.name}</p>
    <p>city : {user.address.city}</p>
    </div>
</div>
))}
</div>
    )
}

export default UserList;