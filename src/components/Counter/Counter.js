import React from 'react';

const Counter = (props) => {
    const counter = props.counter;
    const total = counter.reduce( (total , sal) => total + Number(sal.salary) , 0);
    // const newTotal = Number(total).toFixed(2);
    return (
        <div>
            <h4>This is cart</h4>
            <h4>Total user added: {counter.length}</h4>
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Counter;