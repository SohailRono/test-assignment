import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './UserInfo.css';
import Users from './Users';
import Counter from '../Counter/Counter';

const UserInfo = () => {
    const [users, setUsers] = useState(fakeData);
    const [counter,setcounter] = useState([]);

    const handleAddUser = (user) => {
        const newcounter = [...counter,user];
        setcounter(newcounter);
        // console.log('Added',user);
    }

    return (
        <div className="users-container">
            <div className="users-list">
                {
                    users.map(user => <Users 
                        handleAddUser={handleAddUser} 
                        user={user} >
                        </Users>)
                }
            </div>
            <div className="users-count">
                <Counter counter={counter}></Counter>
            </div>
        </div>
    );
};

export default UserInfo;