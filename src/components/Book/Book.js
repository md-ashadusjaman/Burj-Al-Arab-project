import React from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello, {loggedInUser.name} </h1> 
            <h2>Let's book a {bedType} Room.</h2>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;