import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    const { name, phone, email,img,salary} = props.user;
    console.log(props.user);
    return (
        <div className="user">
             <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h4>Phone: {phone}</h4>
                <h4>Email: {email}</h4>
                <h4>Salary: {salary}</h4>
                <button onClick={() => props.handleAddUser(props.handleAddUser)}><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default Users;