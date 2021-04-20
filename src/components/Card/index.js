import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchRepos } from '../../actions';


const Card = () => {
    
    const dispatch = useDispatch(); 

    const result = useSelector(state => state.result);
    const loading = useSelector(state => state.loading);

    useEffect ( async () => {
        dispatch(fetchRepos());
        },[]); 

    console.log(result[0].user)

    return(
        <div className="card">

        </div>
    )
}

export default Card;