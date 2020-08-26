import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './UserInfo.css';
import Users from './Users';

const UserInfo = () => {
    const [users, setUsers] = useState(fakeData);

    const handleAddUser = (user) => {
        console.log('Added',user);
    }

    return (
        <div className="users-container">
            <div className="users-list">
                {
                    users.map(user => <Users handleAddUser={handleAddUser} user={user} ></Users>)
                }
            </div>
            <div className="users-count">
                <h4>Details Information</h4>
            </div>
        </div>
    );
};

export default UserInfo;